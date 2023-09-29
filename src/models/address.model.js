const mongoose = require("mongoose");

/**address schema */
const addressSchema = new mongoose.Schema(
    {
        address_id: {
            type: Number,
            trim: true
        },
        user_id: {
            type: Number,
            trim: true
        },
        address_line: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        postal_code: {
            type: Number,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Address = mongoose.model("address", addressSchema);
module.exports = Address