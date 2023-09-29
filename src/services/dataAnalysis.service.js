const { DataAnalysis } = require("../models");

/**create DataAnalysis */
const createDataAnalysis = async (reqBody) => {
    return DataAnalysis.create(reqBody);
}

/**get DataAnalysis list */
const getDataAnalysisList = async (req, res) => {
    return DataAnalysis.find();
}

/**get DataAnalysis details by id */
const getDataAnalysisById = async (dataAnalysisId) => {
    return DataAnalysis.findById(dataAnalysisId);
}

/**update DataAnalysis */
const updateDataAnalysis = async (dataAnalysisId, updateBody) => {
    return DataAnalysis.findByIdAndUpdate(dataAnalysisId, updateBody);
}

/**delete DataAnalysis */
const deleteDataAnalysis = async (dataAnalysisId) => {
    return DataAnalysis.findByIdAndDelete(dataAnalysisId);
}

module.exports = {
    createDataAnalysis,
    getDataAnalysisList,
    getDataAnalysisById,
    updateDataAnalysis,
    deleteDataAnalysis
}