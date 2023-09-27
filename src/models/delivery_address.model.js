const mongoose = require("mongoose");

const delivery_addressSchema = new mongoose.Schema(
    {
        address_line1: {
            type: String,
            trim: true,
        },
        address_line2: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
        postal_code: {
            type: String,
            trim: true,
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

const Delivery_address = mongoose.model("delivery_address", delivery_addressSchema)

module.exports = Delivery_address

// user_id ref