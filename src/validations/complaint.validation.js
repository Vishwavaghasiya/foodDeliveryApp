const Joi = require("joi");

// create complaint validation
const createComplaint = {
    body: Joi.object().keys({
        content: Joi.string().required().trim(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createComplaint
};
