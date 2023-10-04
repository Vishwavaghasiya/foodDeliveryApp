const express = require("express");
const { restaurantPhotoValidation } = require("../../validations");
const { restaurantPhotoController } = require("../../controllers");
const validate = require("../../middlewares/validate");
<<<<<<< HEAD
const auth = require("../../middlewares/auth")
const { upload } = require("../../middlewares/upload")
=======
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");
>>>>>>> e8d073a48857345251ebb719a8a15a7166ff6b4a

const router = express.Router();

// create restaurantPhoto
router.post(
  "/create-restaurantPhoto",
  auth(),
  upload.single("restaurantPhoto_image"),
  validate(restaurantPhotoValidation.createRestaurantPhoto),
  restaurantPhotoController.createRestaurantPhoto
);

// Get restaurantPhoto list
router.get(
  "/list",
  restaurantPhotoController.getRestaurantPhotoList
);

// Get restaurantPhoto details by id
router.get(
  "/get-details/:restaurantPhotoId",
  restaurantPhotoController.getDetails
);

// user setting details update by id
router.put(
  "/update-details/:restaurantPhotoId",
  restaurantPhotoController.updateDetails
);

// Delete restaurantPhoto
router.delete(
  "/delete-restaurantPhoto/:restaurantPhotoId",
  restaurantPhotoController.deleteRestaurantPhoto
);

module.exports = router;
