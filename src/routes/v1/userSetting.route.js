const express = require("express");
const { userSettingValidation } = require("../../validations");
const { userSettingController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create usersetting
router.post(
  "/create-usersetting",
  validate(userSettingValidation.createUserSetting),
  userSettingController.createUserSetting
);

// Get usersetting list
router.get(
  "/list",
  userSettingController.getUserSettingList
);

// Get usersetting details by id
router.get(
  "/get-details/:usersettingId",
  userSettingController.getDetails
);

// user setting details update by id
router.put(
  "/update-details/:usersettingId",
  userSettingController.updateDetails
);

// Delete usersetting
router.delete(
  "/delete-usersetting/:usersettingId",
  userSettingController.deleteUserSetting
);

module.exports = router;
