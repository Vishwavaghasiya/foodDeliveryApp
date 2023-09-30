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
const orderRoute = require("./order.route");
const favoriteRoute = require("./favorite.route");



const countryRoute = require("./country.route");
const stateRoute = require("./state.route");
const cityRoute = require("./city.route");
const userPhotoRoute = require("./userPhoto.route");
const userSettingRoute = require("./userSetting.route");
const restaurantHourRoute = require("./restaurantHour.route");
const restaurantPhotoRoute = require("./restaurantPhoto.Route");
const chatMessageRoute = require("./chatMessage.route");
const specialRoute = require("./special.route");
const complaintRoute = require("./complaint.route");

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
router.use("/order" , orderRoute);
router.use("/favorite" , favoriteRoute);




router.use("/country", countryRoute);
router.use("/state", stateRoute);
router.use("/city", cityRoute);
router.use("/userPhoto", userPhotoRoute);
router.use("/userSetting", userSettingRoute);
router.use("/restaurantHour", restaurantHourRoute);
router.use("/restaurantPhoto", restaurantPhotoRoute);
router.use("/chatMessage", chatMessageRoute);
router.use("/special", specialRoute);
router.use("/complaint", complaintRoute);

module.exports = router;