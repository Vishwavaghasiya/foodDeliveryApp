const mongoose = require("mongoose");

/**User schema */
const userSchem = new mongoose.Schema(
    {
        user_name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            trim: true
        },
        role: {
            type: String,
            trim: true
        },
        profile_info: {
            type: String,
            trim: true
        },
        preferences: {
            type: String,
            trim: true
        },
        is_active: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;