const { Promocode } = require("../models");


// Create promocode
const createPromocode = async (reqBody) => {
  return Promocode.create(reqBody);
};

// Get promocode list
const getPromocodeList = async () => {
  return Promocode.find({$or : [{is_active: true}]})
};

// Get promocode details by id
const getPromocodeById = async (promocodeId) => {
  return Promocode.findById(promocodeId);
};

// promocode details update by id
const updateDetails = async (promocodeId, updateBody) => {
  return Promocode.findByIdAndUpdate(promocodeId, { $set: updateBody });
};

// Delete promocode
const deletePromocode = async (promocodeId) => {
  return Promocode.findByIdAndDelete(promocodeId);
};

module.exports = {
  createPromocode,
  getPromocodeList,
  getPromocodeById,
  updateDetails,
  deletePromocode,
};
