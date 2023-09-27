const Joi = require("joi");

/** Customer support agent validation*/
const createCustomerSupportAgent = {
    body: Joi.object().keys({
        department: Joi.string().required().trim(),
        shift_hours: Joi.string().required().trim(),
    })
}

module.exports = {
    createCustomerSupportAgent
}