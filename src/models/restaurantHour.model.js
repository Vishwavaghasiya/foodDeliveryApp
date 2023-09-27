const mongoose = require("mongoose");

const restaurantHourSchema = new mongoose.Schema(
    {
        day_of_week: {
            type: String,
            trim: true,
        },
        open_time: {
            type: Date,
            default: Date.now,
        },
        close_time: {
            type: Date,
            default: Date.now,
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

const RestaurantHour = mongoose.model("restaurantHour", restaurantHourSchema)

module.exports = RestaurantHour

// restaurant_id ref