const mongoose = require("mongoose");

/**Data analysts schema */
const dataAnalystsSchema = new mongoose.Schema(
    {
        analyst_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        analyst_project: {
            type: String,
            trim: true
        },
        analysis_results: {
            type: String,
            trim: true
        },
        is_active: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const DataAnalysts = mongoose.model("dataAnalysts", dataAnalystsSchema);
module.exports = DataAnalysts