const mongoose = require("mongoose");

/**user photo schema */
const userPhotoSchema = new mongoose.Schema(
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

const UserPhoto = mongoose.model("userPhoto", userPhotoSchema)

module.exports = UserPhoto

// user_id ref