const mongoose = require("mongoose");

/**favorite schema */
const favoriteSchema = new mongoose.Schema(
    {
        favorite_id: {
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

const favorite = mongoose.model("favorite", favoriteSchema);

module.exports = favorite