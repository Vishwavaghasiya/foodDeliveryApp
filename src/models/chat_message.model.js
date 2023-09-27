const mongoose = require("mongoose");

const chat_messageSchema = new mongoose.Schema(
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

const Chat_message = mongoose.model("chat_message", chat_messageSchema)

module.exports = Chat_message

// chat_id ref
// user_id ref