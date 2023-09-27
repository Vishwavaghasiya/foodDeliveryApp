const Joi = require("joi");

// create delivery driver validation
const createDeliveryDriver = {
    body: Joi.object().keys({
        vehicle_number: Joi.string().required().trim(),
        license_number: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createDeliveryDriver
};