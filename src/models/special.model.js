const mongoose = require("mongoose");

const specialSchema = new mongoose.Schema(
    {
        dish_name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
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

const Special = mongoose.model("special", specialSchema)

module.exports = Special

// restaurant_id ref