const mongoose = require("mongoose");

/**paymentMethod schema */
const paymentMethodSchema = new mongoose.Schema(
    {
        payment_method_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        card_number: {
            type: String,
            trim: true
        },
        expiration_date: {
            type: Date,
            default: Date.now,
        },
        card_holder_name: {
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

const PaymentMethod = mongoose.model("paymentMethod", paymentMethodSchema);

module.exports = PaymentMethod