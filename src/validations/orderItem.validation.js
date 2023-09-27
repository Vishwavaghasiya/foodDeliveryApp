const Joi = require("joi");

// create order item validation
const createOrderItem = {
    body: Joi.object().keys({
        quantity: Joi.number().integer().allow(),
        subtotal_price: Joi.number().integer().allow(),
    }),
  };

module.exports = {
    createOrderItem
};
