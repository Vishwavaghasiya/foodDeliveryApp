const Joi = require("joi");

/**marketing manager validation*/
const createMarketingManager = {
    body: Joi.object().keys({
        manager_id: Joi.number().integer().allow(),
        user_id: Joi.number().integer().allow(),
        campaign_name: Joi.string().required().trim(),
        promotion_details: Joi.string().required().trim(),
    })
}

module.exports = {
    createMarketingManager
}