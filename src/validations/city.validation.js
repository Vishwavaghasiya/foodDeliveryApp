const Joi = require("joi");

/** Create city validation */
const createCity = {
  body: Joi.object().keys({
    city_name: Joi.string().required().trim(),
    population: Joi.number().integer().allow(),
    created_at: Joi.date().iso().required(),
  }),
};

module.exports = {
  createCity,
};
