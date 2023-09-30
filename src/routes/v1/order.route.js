const express = require("express");
const { ordersValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const { orderController } = require("../../controllers");

const router = express.Router();

router.post(
    "/createOrder",
    validate(ordersValidation.createOrders),
    orderController.createOrder
);

router.get(
    "/getOrderList",
    orderController.getOrderList
);

router.get(
    "/orderDetails/:orderId",
    orderController.getOrderDetails
);

router.put(
    "/update/:orderId",
    orderController.updateOrder
);

router.delete(
    "/delete/:orderId",
    orderController.deleteOrder
);

module.exports = router