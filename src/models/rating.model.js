const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            trim: true,
        },
        created_at: {
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

const Rating = mongoose.model("rating", ratingSchema)

module.exports = Rating

// restaurant_id ref
// user_id ref