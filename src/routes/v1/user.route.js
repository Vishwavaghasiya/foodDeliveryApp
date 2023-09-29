const { userValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { userController } = require("../../controllers");

const express = require("express");

const router = express.Router();

/**create user */
router.post(
    "/createUser",
    validate(userValidation.createUser),
    userController.createUser
);

/**get user list */
router.get(
    "/getUserList",
    userController.getUserList
);

/**get user details */
router.get(
    "/getUserDetails/:userId",
    userController.getUserDetails
);

/**update user */
router.put(
    "/updateUser/:userId",
    userController.updateUser
);

/**delete user */
router.delete(
    "/deleteUser/:userId",
    userController.deleteUser
);

/**send mail */
router.post(
    "/sendMail",
    userController.sendMail
)

module.exports = router;