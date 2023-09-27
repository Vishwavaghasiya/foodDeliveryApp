const Joi = require("joi");

// create promocode validation
const createPromocode = {
    body: Joi.object().keys({
        code: Joi.number().integer().allow(),
        discount: Joi.string().required().trim(),
        start_date: Joi.string().required().trim(),
        end_date: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createPromocode
};
