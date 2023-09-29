const mongoose = require("mongoose");

/**notification schema */
const notificationSchema = new mongoose.Schema(
    {
        notification_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        content: {
            type: String,
            trim: true
        },
        read_status: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification