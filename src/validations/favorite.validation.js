const Joi = require("joi");

/**create favorite */
const createFavorite = {
    body: Joi.object().keys({
        // favorite_id : Joi.number().integer(),
        // user_id : Joi.number().integer(),
        // restaurant_id : Joi.number().integer(),
    })
}

module.exports = {
    createFavorite
}