const Joi = require("joi");

/**create review */
const createReview = {
    body: Joi.object().keys({
        comment: Joi.string().required().trim(),
        rating : Joi.number().integer(),
    })
}

module.exports = {
    createReview
}