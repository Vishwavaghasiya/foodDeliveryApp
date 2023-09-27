const mongoose = require("mongoose");

const restaurant_photoSchema = new mongoose.Schema(
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

const Restaurant_photo = mongoose.model("restaurant_photo", restaurant_photoSchema)

module.exports = Restaurant_photo

// restaurant_id ref