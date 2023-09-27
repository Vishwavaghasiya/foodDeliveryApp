const mongoose = require("mongoose");

const deliveryDriversSchema = new mongoose.Schema(
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

const DeliveryDrivers = mongoose.model("deliveryDrivers", deliveryDriversSchema);

module.exports = DeliveryDrivers

// user_id ref