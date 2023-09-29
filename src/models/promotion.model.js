const mongoose = require("mongoose");

/**promotion schema */
const promotionSchema = new mongoose.Schema(
    {
        promotion_id: {
            type: Number,
            trim: true
        },
        restaurant_id: {
            type: Number,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        start_date: {
            type: Date,
            default: Date.now,
        },
        end_date: {
            type: Date,
            default: Date.now,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Promotion = mongoose.model("promotion", promotionSchema);
module.exports = Promotion