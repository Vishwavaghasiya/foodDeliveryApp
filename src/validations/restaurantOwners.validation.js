const Joi = require("joi");

/**restaurant owner validation*/
const createRestaurantOwners = {
    body: Joi.object().keys({
        owner_id: Joi.number().integer().allow(),
        user_id: Joi.number().integer().allow(),
        restaurant_id: Joi.number().integer().allow(),
        role: Joi.string().required().trim(),
        ownership_percentage: Joi.string().required().trim(),
    })
}

module.exports = {
    createRestaurantOwners
}