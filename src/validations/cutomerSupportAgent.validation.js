const Joi = require("joi");

/** create customer support agent */
const createCustomerSupportAgent = {
    body: Joi.object().keys({
        department: Joi.string().required().trim(),
        shift_hours: Joi.string().required().trim(),
    })
}

module.exports = {
    createCustomerSupportAgent
}