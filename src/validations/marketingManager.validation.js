const Joi = require("joi");

/**create marketing manager */
const createMarketingManager = {
    body: Joi.object().keys({
        campaign_name: Joi.string().required().trim(),
        promotion_details: Joi.string().required().trim(),
    })
}

module.exports = {
    createMarketingManager
}