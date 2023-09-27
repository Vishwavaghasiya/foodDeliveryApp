const mongoose = require("mongoose");

/**order item schema */
const orderItemSchema = new mongoose.Schema(
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

const OrderItem = mongoose.model("orderItem", orderItemSchema)

module.exports = OrderItem

// order_id ref
// menu_item_id ref