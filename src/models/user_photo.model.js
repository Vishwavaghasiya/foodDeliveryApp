const mongoose = require("mongoose");

const user_photoSchema = new mongoose.Schema(
    {
        photo_url: {
            type: String,
            trim: true,
        },
        caption: {
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

const User_photo = mongoose.model("user_photo", user_photoSchema)

module.exports = User_photo

// user_id ref