const mongoose = require("mongoose");

/**chat message schema */
const chatMessageSchema = new mongoose.Schema(
    {
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

const ChatMessage = mongoose.model("chatMessage", chatMessageSchema);
module.exports = ChatMessage

// chat_id ref
// user_id ref