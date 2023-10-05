const { PaymentMethods } = require("../models");

/**create PaymentMethods */
const createPaymentMethods = async (reqBody) => {
    return PaymentMethods.create(reqBody);
}

/**get PaymentMethods list */
const getPaymentMethodsList = async (req, res) => {
    return PaymentMethods.find()
        .populate("user_id")
        .populate("payment_history");
}

/**get PaymentMethods details by id */
const getPaymentMethodsById = async (paymentMethodId) => {
    return PaymentMethods.findById(paymentMethodId);
}

/**update PaymentMethods */
const updatePaymentMethods = async (paymentMethodId, updateBody) => {
    return PaymentMethods.findByIdAndUpdate(paymentMethodId, { $set: updateBody });
}

/**delete PaymentMethods */
const deletePaymentMethods = async (paymentMethodId) => {
    return PaymentMethods.findByIdAndDelete(paymentMethodId);
}

module.exports = {
    createPaymentMethods,
    getPaymentMethodsList,
    getPaymentMethodsById,
    updatePaymentMethods,
    deletePaymentMethods
}