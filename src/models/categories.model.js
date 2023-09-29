const mongoose = require("mongoose");

/**categories schema */
const categoriesSchema = new mongoose.Schema(
    {
        categories_id: {
            type: Number,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        description: {
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

const Categories = mongoose.model("categories", categoriesSchema);
module.exports = Categories