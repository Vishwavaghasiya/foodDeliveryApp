const Joi = require("joi");

/**create promotion */
const createPromotion = {
    body: Joi.object().keys({
        description: Joi.string().required().trim(),
    })
}

module.exports = {
    createPromotion
}