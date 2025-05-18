import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";

const verifyAuthToken = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.authToken 
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Request, authToken Absent!"
            });
        }

        const user = await User.findById(token).select("-password -otp -resetAuth");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized Request, Invalid authToken!"
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success: false,
            message: "Caught Error, Unauthorized Request, Invalid Access Token!"
        });
    }
});

export { verifyAuthToken };
