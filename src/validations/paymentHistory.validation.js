const Joi = require("joi");

/**create paymentHistory */
const createPaymentHistory = {
    body: Joi.object().keys({
        amount: Joi.number().integer(),
        payment_method: Joi.string().required().trim(),
        status: Joi.string().required().trim(),
    })
}

module.exports = {
    createPaymentHistory
}