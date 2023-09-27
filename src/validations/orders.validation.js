const Joi = require("joi");

/**create orders */
const createOrders = {
    body: Joi.object().keys({
        status: Joi.string().required().trim(),
    })
}

module.exports = {
    createOrders
}