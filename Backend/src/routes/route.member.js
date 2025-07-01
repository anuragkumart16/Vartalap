import { Router } from "express";
import { getMembers, requestMember, rejectRequest, acceptRequest, deleteRequest, getFriendRequests, getFriends } from "../controllers/member.controller.js";
import { verifyAuthToken } from "../middleware/auth.middleware.js";

const memberRouter = Router()

memberRouter.route('/').post(getMembers)
memberRouter.route('/request').post(verifyAuthToken,requestMember)
memberRouter.route('/delete').delete(verifyAuthToken,deleteRequest)
memberRouter.route('/accept').put(verifyAuthToken,acceptRequest)
memberRouter.route('/reject').put(verifyAuthToken,rejectRequest)
memberRouter.route('/requests').get(verifyAuthToken,getFriendRequests)
memberRouter.route('/friends').get(verifyAuthToken, getFriends)

export { memberRouter }