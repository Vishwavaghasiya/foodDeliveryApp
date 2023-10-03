const mongoose = require("mongoose");

/**restaurant owners schema */
const restaurantOwners = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        role: {
            type: String,
            trim: true
        },
        ownership_percentage: {
            type: Number,
            trim: true
        },
        is_active: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const RestaurantOwners = mongoose.model("restaurantOwners", restaurantOwners);
module.exports = RestaurantOwners;