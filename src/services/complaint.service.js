const { Complaint } = require("../models");

/**Create complaint */
const createComplaint = async (reqBody) => {
  return Complaint.create(reqBody);
};

/**Get complaint list */
const getComplaintList = async () => {
  return Complaint.find({ $or: [{ is_active: true }] })
    .populate("restaurant_id")
    .populate("user_id")
};

/**Get complaint details by id */
const getComplaintById = async (complaintId) => {
  return Complaint.findById(complaintId);
};

/**Complaint details update by id */
const updateDetails = async (complaintId, updateBody) => {
  return Complaint.findByIdAndUpdate(complaintId, { $set: updateBody });
};

/**Delete complaint */
const deleteComplaint = async (complaintId) => {
  return Complaint.findByIdAndDelete(complaintId);
};

module.exports = {
  createComplaint,
  getComplaintList,
  getComplaintById,
  updateDetails,
  deleteComplaint,
};
