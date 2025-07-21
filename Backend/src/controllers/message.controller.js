import { Message } from '../models/message.models.js';
import successResponse from '../utils/successResponse.js';
import errorResponse from '../utils/errorResponse.js';

export const getMessagesBetweenUsers = async (req, res) => {
  console.log('[DEBUG] Fetching messages for user:', req.user?._id, 'and otherUserId:', req.params.otherUserId);
  try {
    const messages = await Message.find({
      $or: [
        { senderId: req.user._id, receiverId: req.params.otherUserId },
        { senderId: req.params.otherUserId, receiverId: req.user._id },
      ],
    }).sort({ createdAt: 1 });
    return successResponse(200, 'Messages fetched successfully', messages, res);
  } catch (error) {
    return errorResponse(500, 'Failed to fetch messages', error.message, res);
  }
}; 