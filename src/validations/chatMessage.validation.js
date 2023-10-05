const Joi = require("joi");

/** create chat message validation */
const createChatMessage = {
    body: Joi.object().keys({
        content: Joi.string().required().trim(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createChatMessage
};