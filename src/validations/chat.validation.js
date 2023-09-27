const Joi = require("joi");

// create chat validation
const createChat = {
    body: Joi.object().keys({
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createChat
};