const Joi = require("joi");

/**admin user validation */
const createAdminUser = {
    body: Joi.object().keys({
        user_id: Joi.number().integer().allow(),
        admin_id: Joi.number().integer().allow(),
        role: Joi.string().required().trim(),
        permissions: Joi.string().required().trim(),
    })
}

module.exports = {
    createAdminUser
}