const mongoose = require("mongoose");

/**menuItems schema */
const menuItemsSchema = new mongoose.Schema(
    {
        item_id: {
            type: Number,
            trim: true
        },
        category_id: {
            type: Number,
            trim: true
        },
        restaurant_id: {
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
        price: {
            type: Number,
            trim: true
        },
        is_active: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const MenuItems = mongoose.model("menuItems", menuItemsSchema);
module.exports = MenuItems