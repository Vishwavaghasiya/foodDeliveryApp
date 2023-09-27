const mongoose = require("mongoose");

/**Content creater schema */
const contentCreaterSchema = new mongoose.Schema(
    {
        creater_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        content_type: {
            type: String,
            trim: true
        },
        content_details: {
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

const ContentCreater = mongoose.model("contentCreater", contentCreaterSchema);
module.exports = ContentCreater