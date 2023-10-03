const { Promotion } = require("../models");

/**create Promotion */
const createPromotion = async (reqBody) => {
    return Promotion.create(reqBody);
}

/**get Promotion list */
const getPromotionList = async (req, res) => {
    return Promotion.find()
        .populate("restaurant_id")
        .populate("marketingManager_id")
        .populate("deliveryDriver_id")
        .populate("customerSupportAgent_id")
        .populate("contentCreater_id");
}

/**get Promotion details by id */
const getPromotionById = async (promotionId) => {
    return Promotion.findById(promotionId);
}

/**update Promotion */
const updatePromotion = async (promotionId, updateBody) => {
    return Promotion.findByIdAndUpdate(promotionId, { $set: updateBody });
}

/**delete Promotion */
const deletePromotion = async (promotionId) => {
    return Promotion.findByIdAndDelete(promotionId);
}

module.exports = {
    createPromotion,
    getPromotionList,
    getPromotionById,
    updatePromotion,
    deletePromotion
}