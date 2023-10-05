const Joi = require("joi");

/** Create user setting validation */
const createUserSetting = {
  body: Joi.object().keys({
    email_notifications: Joi.boolean().required(),
    push_notifications: Joi.boolean().required(),
    sms_notifications: Joi.boolean().required(),
    language_preference: Joi.string().required().trim(),
    theme_preference: Joi.string().required().trim(),
  }),
};

module.exports = {
  createUserSetting,
};
