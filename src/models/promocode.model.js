const mongoose = require("mongoose");

const promocodeSchema = new mongoose.Schema(
    {
        code: {
            type: Number,
            trim: true,
        },
        discount: {
            type: Number,
            trim: true,
        },
        start_date: {
            type: Date,
            default: Date.now,
        },
        end_date: {
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

const Promocode = mongoose.model("promocode", promocodeSchema)

module.exports = Promocode