const { UserSetting } = require("../models");


// Create userSetting
const createUserSetting = async (reqBody) => {
  return UserSetting.create(reqBody);
};

// Get userSetting list
const getUserSettingList = async () => {
  return UserSetting.find({$or : [{is_active: true}]})
};

// Get userSetting details by id
const getUserSettingById = async (userSettingId) => {
  return UserSetting.findById(userSettingId);
};

// userSetting details update by id
const updateDetails = async (userSettingId, updateBody) => {
  return UserSetting.findByIdAndUpdate(userSettingId, { $set: updateBody });
};

// Delete userSetting
const deleteUserSetting = async (userSettingId) => {
  return UserSetting.findByIdAndDelete(userSettingId);
};

module.exports = {
  createUserSetting,
  getUserSettingList,
  getUserSettingById,
  updateDetails,
  deleteUserSetting,
};
