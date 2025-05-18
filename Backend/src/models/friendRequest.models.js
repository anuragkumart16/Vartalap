import mongoose,{Schema} from "mongoose";

const friendRequestSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
    },
    requestMessage: {
        type: String,
        default: "",
    },
},{
    timestamps: true
});

export const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema);