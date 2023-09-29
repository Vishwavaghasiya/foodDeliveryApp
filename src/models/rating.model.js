const mongoose = require("mongoose");

/**rating schema */
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

<<<<<<< HEAD
const Rating = mongoose.model("rating", ratingSchema);
=======
const Rating = mongoose.model("rating", ratingSchema)
>>>>>>> e8c8a5f559efe5a31cbfa381d97b03273b00b586
module.exports = Rating

// restaurant_id ref
// user_id ref