const mongoose = require("mongoose");

/**Restaurant schema */
const restaurantSchema = new mongoose.Schema(
    {
        restaurant_id: {
            type: Number,
            trim: true
        },
        owner_id: {
            type: Number,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true
        },
        cuisine_type: {
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
        versionKey: false,
    }
);

const Restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = Restaurant