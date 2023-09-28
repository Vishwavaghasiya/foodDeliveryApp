const express = require("express");
const { userPhotoValidation } = require("../../validations");
const { userPhotoController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create UserPhoto
router.post(
  "/create-UserPhoto",
  validate(userPhotoValidation.createUserPhoto),
  userPhotoController.createUserPhoto
);

// Get UserPhoto list
router.get(
  "/list",
  userPhotoController.getUserPhotoList
);

// Get UserPhoto details by id
router.get(
  "/get-details/:UserPhotoId",
  userPhotoController.getDetails
);

// UserPhoto details update by id
router.put(
  "/update-details/:UserPhotoId",
  userPhotoController.updateDetails
);

// Delete UserPhoto
router.delete(
  "/delete-UserPhoto/:UserPhotoId",
  userPhotoController.deleteUserPhoto
);

module.exports = router;
