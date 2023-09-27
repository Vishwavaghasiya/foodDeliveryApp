const Joi = require("joi");

/** create restaurant owner*/
const createRestaurantOwners = {
    body: Joi.object().keys({
        role: Joi.string().required().trim(),
        ownership_percentage: Joi.string().required().trim(),
    })
}

module.exports = {
    createRestaurantOwners
}