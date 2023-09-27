const mongoose = require("mongoose");

/**Marketing manager schema */
const marketingManagerSchema = new mongoose.Schema(
    {
        manager_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        campaign_name: {
            type: String,
            trim: true
        },
        promotion_details: {
            type: String,
            trim: true
        },
        start_date: {
            type: String,
            trim: true
        },
        end_date: {
            type: String,
            trim: true
        },
        is_active: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const MarketingManager = mongoose.model("marketingManager", marketingManagerSchema);
module.exports = MarketingManager