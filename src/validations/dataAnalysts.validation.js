const Joi = require("joi");

/**create data analysts */
const createDataAnalysts = {
    body: Joi.object().keys({
        analyst_project: Joi.string().required().trim(),
        analysis_results: Joi.string().required().trim(),
    })
}

module.exports = {
    createDataAnalysts
}