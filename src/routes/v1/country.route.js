const express = require("express");
const { countryValidation } = require("../../validations");
const { countryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create user
router.post(
  "/create-user",
  validate(countryValidation.createCountry),
  countryController.createCountry
);

// Get user list
router.get(
  "/list",
  countryController.getCountryList
);

// Get user details by id
router.get(
  "/get-details/:userId",
  countryController.getDetails
);

// user details update by id
router.put(
  "/update-details/:userId",
  countryController.updateDetails
);

// Delete user
router.delete(
  "/delete-user/:userId",
  countryController.deleteCountry
);

module.exports = router;
