const mongoose = require("mongoose");

const user_settingSchema = new mongoose.Schema(
    {
        email_notifications: {
            type: Boolean,
            trim: true,
        },
        push_notifications: {
            type: Boolean,
            trim: true,
        },
        sms_notifications: {
            type: Boolean,
            trim: true,
        },
        language_preference: {
            type: String,
            trim: true,
        },
        theme_preference: {
            type: String,
            trim: true,
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

const User_setting = mongoose.model("user_setting", user_settingSchema)

module.exports = User_setting

// user_id ref