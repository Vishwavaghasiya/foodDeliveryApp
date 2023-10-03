const { OrderItem } = require("../models");


// Create orderItem
const createOrderItem = async (reqBody) => {
  return OrderItem.create(reqBody);
};

// Get orderItem list
const getOrderItemList = async () => {
  return OrderItem.find({ $or: [{ is_active: true }] })
    .populate("order_id")
    .populate("menu_item_id")
};

// Get orderItem details by id
const getOrderItemById = async (orderItemId) => {
  return OrderItem.findById(orderItemId);
};

// orderItem details update by id
const updateDetails = async (orderItemId, updateBody) => {
  return OrderItem.findByIdAndUpdate(orderItemId, { $set: updateBody });
};

// Delete orderItem
const deleteOrderItem = async (orderItemId) => {
  return OrderItem.findByIdAndDelete(orderItemId);
};

module.exports = {
  createOrderItem,
  getOrderItemList,
  getOrderItemById,
  updateDetails,
  deleteOrderItem,
};
