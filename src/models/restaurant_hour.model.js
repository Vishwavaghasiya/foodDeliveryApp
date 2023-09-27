const mongoose = require("mongoose");

const restaurant_hourSchema = new mongoose.Schema(
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

const Restaurant_hour = mongoose.model("restaurant_hour", restaurant_hourSchema)

module.exports = Restaurant_hour

// restaurant_id ref