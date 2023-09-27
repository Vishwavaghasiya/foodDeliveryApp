const Joi = require("joi");

/**create menu items */
const createMenuitems = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        price: Joi.number().integer(),
    })
}

module.exports = {
    createMenuitems
}