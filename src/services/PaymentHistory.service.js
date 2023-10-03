const { PaymentHistory } = require("../models");

/**create PaymentHistory */
const createPaymentHistory = async (reqBody) => {
    return PaymentHistory.create(reqBody);
}

/**get PaymentHistory list */
const getPaymentHistoryList = async (req, res) => {
    return PaymentHistory.find()
        .populate("user_id")
        .populate("order_id")
        .populate("paymentMethod_id");
}

/**get PaymentHistory details by id */
const getPaymentHistoryById = async (paymentMethodId) => {
    return PaymentHistory.findById(paymentMethodId);
}

/**update PaymentHistory */
const updatePaymentHistory = async (paymentMethodId, updateBody) => {
    return PaymentHistory.findByIdAndUpdate(paymentMethodId, { $set: updateBody });
}

/**delete PaymentHistory */
const deletePaymentHistory = async (paymentMethodId) => {
    return PaymentHistory.findByIdAndDelete(paymentMethodId);
}

module.exports = {
    createPaymentHistory,
    getPaymentHistoryList,
    getPaymentHistoryById,
    updatePaymentHistory,
    deletePaymentHistory
}