import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { sendResetEmail } from "../utils/resetEmail.js";
import { getUser } from "../utils/getUser.js";
import successResponse from './../utils/successResponse.js'
import errorResponse from './../utils/errorResponse.js'


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return errorResponse(400, "All fields are required", null, res);
    }

    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return errorResponse(400, "Enter a valid email", null, res);
        }
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return errorResponse(400, "Email is already taken", null, res);
    }

    const userwithusername = await User.findOne({ username });
    if (userwithusername) {
        return errorResponse(400, "Username is already taken", null, res);
    }

    const user = await User.create({ username, email, password })
    if (user) {
        return successResponse(201, "User created successfully", user, res);
    } else {
        return errorResponse(500, "Something went wrong while creating a user", null, res);
    }
});

const sendResetPasswordEmail = asyncHandler(async (req, res) => {
    let { email, username } = req.body;



    email = email?.trim();
    username = username?.trim();

    if (!email && !username){
        return errorResponse(400, "Email or username is required!", null, res);
    }

    let user = await getUser(email, username,res);
    // console.log(user)
    if (!user) {
        return errorResponse(400, `No account found with given ${email ? "email" : "username"}`, null, res);
    }

    // sending otp
    try {
        const [resetToken,otp] = await sendResetEmail(user.email);
        user.resetAuth = resetToken;
        user.otp = otp;
        user.save();
        return res.cookie("resetToken", resetToken, {
            httpOnly: true,
            secure: process.env.COOKIE_SECURE,
            sameSite: process.env.COOKIE_SAME_SITE,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: "/",
        })
        .status(200).json({
            success: true,
            message: "OTP sent successfully to registered email",
        });
    } catch (error) {
        console.log(error);
        return errorResponse(500, "Something went wrong, while sending reset otp please try again later!", null, res);
    }
});

const verifyOTP = asyncHandler(async (req, res) => {
    const token = req.cookies?.resetToken
    let { otp } = req.body;

    // getting user instance
    if (!token) {
        return errorResponse(400, "Reset token is required!", null, res);
    }
    let user = await User.findOne({ resetAuth : token });

    if (!user) {
        return errorResponse(400, "Invalid reset token!", null, res);
    }

    if (user.otp == otp) {
        return successResponse(200, "OTP verified successfully", null, res);
    }else{
        return errorResponse(400, "Invalid OTP!", null, res);
    }
});

const loginUser = asyncHandler(async (req, res) => {
    let { email, username, password } = req.body;
    email = email?.trim();
    username = username?.trim();
    password = password?.trim();

    if (!email && !username) {
        return errorResponse(400, "Enter email or username", null, res);
    }

    let user = await getUser(email, username);

    // checking if user exists
    if (!user) {
        return errorResponse(400, `No account found with given ${email ? "email" : "username"}`, null, res);
    }

    // checking if password is correct
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        return errorResponse(400, "Password is incorrect", null, res);
    }

    const authToken = user._id

    // sending response
    res
        .status(200)
        .cookie("authToken", authToken, {
            httpOnly: true,
            secure: process.env.COOKIE_SECURE,
            sameSite: process.env.COOKIE_SAME_SITE,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: "/"
        })
        .json({
            success: true,
            message: "Login successful",
            data: {
                authToken,
                _id: user.id,
                email: user.email,
                username: user.username,
            },
        });
});

const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("authToken", {
        path: "/",
        secure: process.env.COOKIE_SECURE,
        sameSite: process.env.COOKIE_SAME_SITE,
        httpOnly: true
    });
    return successResponse(200, "Logged out successfully", null, res);
});

const sendOK = asyncHandler(async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "authToken verified successfully!",
        data: req.user
    });
});

const resetPassword = asyncHandler(async (req, res) => {
    const newPassword = req.body.password;
    const token = req.cookies?.resetToken;

    if (!token) {
        return errorResponse(400, "Invalid Request!", null, res);
    }
    if (!newPassword) {
        return errorResponse(400, "New password is required!", null, res);
    }

    let user = await User.findOne({ resetAuth : token });
    if (!user) {
        return errorResponse(400, "Invalid Request!", null, res);
    }
    user.password = newPassword;
    user.resetAuth = null;
    user.otp = null;
    await user.save();
    res.clearCookie("resetToken", {
        path: "/",
        secure: process.env.COOKIE_SECURE,
        sameSite: process.env.COOKIE_SAME_SITE,
        httpOnly: true
    })
    return successResponse(200, "Password reset successfully", null, res);
    

});

export {
    registerUser,
    sendResetPasswordEmail,
    verifyOTP,
    loginUser,
    logoutUser,
    sendOK,
    resetPassword
};
