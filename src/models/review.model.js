const mongoose = require("mongoose");

/**review schema */
const reviewSchema = new mongoose.Schema(
    {
        review_id: {
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
        rating: {
            type: Number,
            trim: true
        },
        comment: {
            type: String,
            trim: true
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

const Review = mongoose.model("review", reviewSchema);
module.exports = Review