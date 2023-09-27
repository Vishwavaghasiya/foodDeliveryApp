const mongoose = require("mongoose");

const order_itemSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            trim: true,
        },
        subtotal_price: {
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

const Order_item = mongoose.model("order_item", order_itemSchema)

module.exports = Order_item

// order_id ref
// menu_item_id ref