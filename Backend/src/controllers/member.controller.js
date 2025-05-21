import { asyncHandler } from "../utils/asyncHandler.js";
import successResponse from "../utils/successResponse.js";
import errorResponse from "../utils/errorResponse.js";
import { User } from "../models/user.models.js";
import { FriendRequest } from "../models/friendRequest.models.js";



const getMembers = asyncHandler(async (req, res) => {
    const { parameter } = req.body;

    if (!parameter) {
        return errorResponse(400, "Parameter is required!", null, res);
    }

    const usernames = await User.find({ username: { $regex: `${parameter}`, $options: "i" } }).select("-password").limit(5);
    const emails = await User.find({ email: { $regex: `${parameter}`, $options: "i" } }).select("-password").limit(5);

    if (!usernames.length && !emails.length) {
        return successResponse(200, "No members found", [], res);
    }

    return successResponse(200, "Members fetched successfully", [...usernames, ...emails], res);
});

const requestMember = asyncHandler(async (req, res) => {
    const { id,message } = req.body;

    if (!id) {
        return errorResponse(400, "Id is required!", null, res);
    }

    const user = await User.findById(id);

    if (!user) {
        return errorResponse(400, "User not found!", null, res);
    }
    

    if (user._id.toString() === req.user._id.toString()) {
        return errorResponse(400, "You cannot send friend request to yourself!", null, res);
    }

    if (req.user.friends.includes(user._id.toString())) {
        return errorResponse(400, "You are already friends with this user!", null, res);
    }

    if ( await FriendRequest.findOne({ senderId: req.user._id, receiverId: user._id }) ) {
        return errorResponse(400, "You have already sent a friend request to this user!", null, res);
    }

    try {
        const request = await FriendRequest.create({
            senderId: req.user._id,
            receiverId: user._id,
            requestMessage: message
        });
        return successResponse(200, "Friend request sent successfully!", request, res);

    } catch (error) {
        return errorResponse(400, "Some Error Occured!", error.message, res);
    }

})

const deleteRequest = asyncHandler(async (req,res)=>{
    const {requestId} = req.body;
    console.log(req.user._id)
    if (!requestId) return errorResponse(400,'No request id was provided!',undefined,res);

    const request = await FriendRequest.findById(requestId)
    if (!request) return errorResponse(400,'No Request Found, Invalid Request Id!',undefined,res);

    if (request.senderId.toString() !== req.user._id.toString()) return errorResponse(400,'Not Allowed!',undefined,res);

    try {
        await FriendRequest.findByIdAndDelete(requestId)
        return successResponse(200,"Friend Request Deleted Successfully!",undefined,res)
    } catch (error) {
        return errorResponse(400,'Some Error Occured!',error.message,res)
    }

})

const acceptRequest = asyncHandler(async (req,res)=>{
    const {requestId} = req.body
    if (!requestId) return errorResponse(400,'No Request Id was Provided!',undefined,res);

    const request = await FriendRequest.findById(requestId)
    if(!request) return errorResponse(400,"No Request Found!",undefined,res);

    console.log(request,'this is request')

    if(request.receiverId.toString() !== req.user._id.toString()) return errorResponse(400,'Not Allowed!',undefined,res);

    try {
        await FriendRequest.findByIdAndUpdate(requestId, { status: "accepted" });

        const sender = await User.findByIdAndUpdate(request.senderId.toString() , { $push: { friends: request.receiverId } });
        const reciever = await User.findByIdAndUpdate(request.receiverId.toString() , { $push: { friends: request.senderId } });

        return successResponse(200,"Request Accepted Successfully!",undefined,res)
    } catch (error) {
        return errorResponse(400,'Some Error Occured!',error.message,res)
    }
})

const rejectRequest = asyncHandler(async (req,res)=>{
    const {requestId} = req.body
    if (!requestId) return errorResponse(400,'No Request Id was Provided!',undefined,res);

    const request = await FriendRequest.findById(requestId)
    if(!request) return errorResponse(400,"No Request Found!",undefined,res);

    if(request.receiverId.toString() !== req.user._id.toString()) return errorResponse(400,'Not Allowed!',undefined,res);

    try {
        await FriendRequest.findByIdAndUpdate(requestId, { status: "rejected" });
        return successResponse(200,"Request Rejected Successfully!",undefined,res)
    } catch (error) {
        return errorResponse(400,'Some Error Occured!',error.message,res)
    }
})

export { getMembers, requestMember , deleteRequest, acceptRequest, rejectRequest };