const Joi = require("joi");

/**create data analysis */
const createDataAnalysis = {
    body: Joi.object().keys({
        analyst_project: Joi.string().required().trim(),
        analysis_results: Joi.string().required().trim(),
    })
}

module.exports = {
    createDataAnalysis
}