const mongoose = require("mongoose");

const restaurantPhotoSchema = new mongoose.Schema(
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

const RestaurantPhoto = mongoose.model("restaurantPhoto", restaurantPhotoSchema);
module.exports = RestaurantPhoto

// restaurant_id ref