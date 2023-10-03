const { Rating } = require("../models");

/**Create Rating */
const createRating = async (reqBody) => {
  return Rating.create(reqBody);
};

/**Get Rating list */
const getRatingList = async () => {
  return Rating.find({ $or: [{ is_active: true }] })
    .populate("user_id")
    .populate("restaurant_id")
};

/**Get Rating details by id */
const getRatingById = async (ratingId) => {
  return Rating.findById(ratingId);
};

/**Rating details update by id */
const updateDetails = async (ratingId, updateBody) => {
  return Rating.findByIdAndUpdate(ratingId, { $set: updateBody });
};

/**Delete Rating */
const deleteRating = async (ratingId) => {
  return Rating.findByIdAndDelete(ratingId);
};

module.exports = {
  createRating,
  getRatingList,
  getRatingById,
  updateDetails,
  deleteRating,
};
