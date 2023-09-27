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
        delivered_at: {
            type: Date,
            default: Date.now,
        },
        status: {
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
// city_id ref
// state_id ref
// country_id ref