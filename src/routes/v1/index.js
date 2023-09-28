const express = require("express");

// const userRoute = require("./user.route");
const countryRoute = require("./country.route");
const stateRoute = require("./state.route");
const cityRoute = require("./city.route");
const userPhotoRoute = require("./userPhoto.route");
const userSettingRoute = require("./userSetting.route");

const router = express.Router();

// router.use("/user", userRoute);
router.use("/country", countryRoute);
router.use("/state", stateRoute);
router.use("/city", cityRoute);
router.use("/userPhoto", userPhotoRoute);
router.use("/userSetting", userSettingRoute);

module.exports = router;