const Joi = require("joi");

/** create rating validation */
const createRating = {
    body: Joi.object().keys({
        rating: Joi.number().integer().allow(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createRating
};