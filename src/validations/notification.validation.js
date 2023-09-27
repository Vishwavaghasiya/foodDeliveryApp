const Joi = require("joi");

/**create Notification */
const createNotification = {
    body: Joi.object().keys({
        content: Joi.string().required().trim(),
        read_status: Joi.string().required().trim(),
    })
}

module.exports = {
    createNotification
}