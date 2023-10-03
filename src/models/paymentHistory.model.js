const mongoose = require("mongoose");

/**paymentHistory schema */
const paymentHistorySchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        order_id: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        paymentMethod_id: {
            type: mongoose.Types.ObjectId,
            ref: "paymentMethod"
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