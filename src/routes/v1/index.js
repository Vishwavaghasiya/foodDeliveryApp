const express = require("express");

const userRoute = require("./user.route");
const adminUserRoute = require("./adminUser.route");
const customerSupportAgentRoute = require("./customerSupportAgent.route");
const restaurantOwnersRoute = require("./restaurantOwners.route");
const marketingManagerRoute = require("./marketingManager.route");
const dataAnalysisRoute = require("./dataAnalysis.route");
const contentCreaterRoute = require("./contentCreater.route");
const restaurantRoute = require("./restaurant.route");
const menuItemsRoute = require("./menuItems.route");
const reviewRoute = require("./review.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/adminUser" , adminUserRoute);
router.use("/customerSupportAgent" , customerSupportAgentRoute);
router.use("/restaurantOwners", restaurantOwnersRoute);
router.use("/marketingManager" , marketingManagerRoute);
router.use("/dataAnalysis" , dataAnalysisRoute);
router.use("/contentCreater" , contentCreaterRoute);
router.use("/restaurants" , restaurantRoute);
router.use("/menuItems" , menuItemsRoute);
router.use("/review" , reviewRoute);

module.exports = router;