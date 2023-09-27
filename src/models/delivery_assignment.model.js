const mongoose = require("mongoose");

const delivery_assignmentSchema = new mongoose.Schema(
    {
        assignment_at: {
            type: Date,
            default: Date.now,
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

const Delivery_assignment = mongoose.model("delivery_assignment", delivery_assignmentSchema)

module.exports = Delivery_assignment

// order_id ref
// driver_id ref