const mongoose = require("mongoose");

/**message schema */
const messageSchema = new mongoose.Schema(
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

const Message = mongoose.model("message", messageSchema)

module.exports = Message

// user_id ref sender
// user_id ref reciever