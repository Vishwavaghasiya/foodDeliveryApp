const { DeliveryAssignment } = require("../models");


/** Create deliveryAssignment */
const createDeliveryAssignment = async (reqBody) => {
  return DeliveryAssignment.create(reqBody);
};

/* Get deliveryAssignment list */
const getDeliveryAssignmentList = async () => {
  return DeliveryAssignment.find({$or : [{is_active: true}]})
};

/** Get deliveryAssignment details by id */
const getDeliveryAssignmentById = async (deliveryAssignmentId) => {
  return DeliveryAssignment.findById(deliveryAssignmentId);
};

/** deliveryAssignment details update by id */
const updateDetails = async (deliveryAssignmentId, updateBody) => {
  return DeliveryAssignment.findByIdAndUpdate(deliveryAssignmentId, { $set: updateBody });
};

/** Delete deliveryAssignment */
const deleteDeliveryAssignment = async (deliveryAssignmentId) => {
  return DeliveryAssignment.findByIdAndDelete(deliveryAssignmentId);
};

module.exports = {
  createDeliveryAssignment,
  getDeliveryAssignmentList,
  getDeliveryAssignmentById,
  updateDetails,
  deleteDeliveryAssignment,
};
