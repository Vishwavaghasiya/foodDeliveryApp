const mongoose = require("mongoose");

const delivery_driversSchema = new mongoose.Schema(
    {
        vehicle_number: {
            type: String,
            trim: true,
        },
        license_number: {
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

const Delivery_drivers = mongoose.model("delivery_drivers", delivery_driversSchema)

module.exports = Delivery_drivers

// user_id ref