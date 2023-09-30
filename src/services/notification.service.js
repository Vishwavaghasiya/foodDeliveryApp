const { Notification } = require("../models");

/**create Notification */
const createNotification = async (reqBody) => {
    return Notification.create(reqBody);
}

/**get Notification list */
const getNotificationList = async (req, res) => {
    return Notification.find();
}

/**get Notification details by id */
const getNotificationById = async (notificationId) => {
    return Notification.findById(notificationId);
}

/**update Notification */
const updateNotification = async (notificationId, updateBody) => {
    return Notification.findByIdAndUpdate(notificationId, { $set: updateBody });
}

/**delete Notification */
const deleteNotification = async (notificationId) => {
    return Notification.findByIdAndDelete(notificationId);
}

module.exports = {
    createNotification,
    getNotificationList,
    getNotificationById,
    updateNotification,
    deleteNotification
}