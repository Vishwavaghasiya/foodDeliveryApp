const mongoose = require("mongoose");

/**restaurant owners schema */
const restaurantOwners = new mongoose.Schema(
    {
        owner_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        restaurant_id: {
            type: Number,
            trim: true
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
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const RestaurantOwners = mongoose.model("restaurantOwners", restaurantOwners);
module.exports = RestaurantOwners;