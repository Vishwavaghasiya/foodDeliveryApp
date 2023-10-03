const mongoose = require("mongoose");

/**message schema */
const messageSchema = new mongoose.Schema(
    {
        sender_id: {
            type: mongoose.Types.ObjectId,
            ref: "chat"
        },
        receiver_id: {
            type: mongoose.Types.ObjectId,
            ref: "chat"
        },
        content: {
            type: String,
            trim: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Message = mongoose.model("message", messageSchema);
module.exports = Message

// user_id ref sender
// user_id ref reciever