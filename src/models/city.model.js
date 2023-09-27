const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
    {
        City_name: {
            type: String,
            trim: true,
        },
        population: {
            type: Number,
            trim: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const City = mongoose.model("city", citySchema)

module.exports = City

// country id ref
// state id ref