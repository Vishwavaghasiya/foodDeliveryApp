const Joi = require("joi");

/**create admin user */
const createAdminUser = {
    body: Joi.object().keys({
        role: Joi.string().required().trim(),
        permissions: Joi.string().required().trim(),
    })
}

module.exports = {
    createAdminUser
}