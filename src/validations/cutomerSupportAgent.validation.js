const Joi = require("joi");

/** Customer support agent validation*/
const createCustomerSupportAgent = {
    body: Joi.object().keys({
        agent_id: Joi.number().integer().allow(),
        user_id: Joi.number().integer().allow(),
        department: Joi.string().required().trim(),
        shift_hours: Joi.string().required().trim(),
    })
}

module.exports = {
    createCustomerSupportAgent
}