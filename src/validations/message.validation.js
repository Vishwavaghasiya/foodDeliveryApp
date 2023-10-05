const Joi = require("joi");

/** create message validation */
const createMessage = {
    body: Joi.object().keys({
        content: Joi.string().required().trim(),
        created_at: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createMessage
};