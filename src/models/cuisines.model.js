const mongoose = require("mongoose");

/**cuisines schema */
const cuisinesSchema = new mongoose.Schema(
    {
        cuisines_id: {
            type: Number,
            trim: true
        },
        name: {
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
        versionKey: false,
    }
);

const Cuisines = mongoose.model("cuisines", cuisinesSchema);

module.exports = Cuisines