const mongoose = require("mongoose");

/**chat schema */
const chatSchema = new mongoose.Schema(
    {
        sender: {
            type: String,
            trim: true
        },
        text: {
            type: String,
            trim: true
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

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat

// user_id ref user1
// user_id ref user2