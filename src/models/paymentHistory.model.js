const mongoose = require("mongoose");

/**paymentHistory schema */
const paymentHistorySchema = new mongoose.Schema(
    {
        payment_history_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        order_id: {
            type: Number,
            trim: true
        },
        amount: {
            type: Number,
            trim: true
        },
        payment_method: {
            type: String,
            trim: true
        },
        status: {
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

const PaymentHistory = mongoose.model("paymentHistory", paymentHistorySchema);
module.exports = PaymentHistory