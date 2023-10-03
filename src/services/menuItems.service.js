const { MenuItems } = require("../models");

/**create MenuItems */
const createMenuItems = async (reqBody) => {
    return MenuItems.create(reqBody);
}

/**get MenuItems list */
const getMenuItemsList = async (req, res) => {
    return MenuItems.find().populate("category_id").populate("restaurant_id");
}

/**get MenuItems details by id */
const getMenuItemsById = async (menuItemsId) => {
    return MenuItems.findById(menuItemsId);
}

/**update MenuItems */
const updateMenuItems = async (menuItemsId, updateBody) => {
    return MenuItems.findByIdAndUpdate(menuItemsId, { $set: updateBody });
}

/**delete MenuItems */
const deleteMenuItems = async (menuItemsId) => {
    return MenuItems.findByIdAndDelete(menuItemsId);
}

module.exports = {
    createMenuItems,
    getMenuItemsList,
    getMenuItemsById,
    updateMenuItems,
    deleteMenuItems
}