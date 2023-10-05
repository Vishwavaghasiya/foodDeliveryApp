const Joi = require("joi");

/** create delivery assignment validation */
const createDeliveryAssignment = {
    body: Joi.object().keys({
        assignment_at: Joi.string().required().trim(),
        delivered_at: Joi.string().required().trim(),
        status: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createDeliveryAssignment
};