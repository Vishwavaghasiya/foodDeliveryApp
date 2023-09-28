const express = require("express");

// const userRoute = require("./user.route");
const countryRoute = require("./country.route");
const stateRoute = require("./state.route");

const router = express.Router();

// router.use("/user", userRoute);
router.use("/country", countryRoute);
router.use("/state", stateRoute);

module.exports = router;