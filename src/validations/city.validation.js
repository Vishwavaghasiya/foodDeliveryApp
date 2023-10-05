const Joi = require("joi");

// Create city validation
const createCity = {
  body: Joi.object().keys({
    country_id: Joi.string().required().trim(),
    state_id: Joi.string().required().trim(),
    city_name: Joi.string().required().trim(),
    population: Joi.number().integer().allow(),
    created_at: Joi.date().iso().required(),
  }),
};

module.exports = {
  createCity,
};
