const express = require("express");
const { favoriteValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const { favoriteController } = require("../../controllers");

const router = express.Router();

router.post(
    "/createFavorite",
    validate(favoriteValidation.createFavorite),
    favoriteController.createFavorite
);

router.get(
    "/getFavoriteList",
    favoriteController.getFavoriteList
);

router.get(
    "/favoriteDetails/:favoriteId",
    favoriteController.getFavoriteDetails
);

router.put(
    "/update/:favoriteId",
    favoriteController.updateFavorite
);

router.delete(
    "/delete/:favoriteId",
    favoriteController.deleteFavorite
);

module.exports = router