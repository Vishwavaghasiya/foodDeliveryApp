const mongoose = require("mongoose");

/**complaint schema */
const complaintSchema = new mongoose.Schema(
    {
        content: {
            type: String,
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

const Complaint = mongoose.model("complaint", complaintSchema);

module.exports = Complaint

// restaurant_id ref
// user_id ref