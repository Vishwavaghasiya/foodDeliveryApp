const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
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

const Chat = mongoose.model("chat", chatSchema)

module.exports = Chat

// user_id ref user1
// user_id ref user2