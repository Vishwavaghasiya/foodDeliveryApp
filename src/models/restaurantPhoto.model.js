const mongoose = require("mongoose");

const restaurantPhotoSchema = new mongoose.Schema(
    {
        photo_url: {
            type: String,
            trim: true,
        },
        caption: {
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
        toJSON: {
            transform: function (doc, data) {
              if (data?.resaturant_image) {
                data.restaurant_image = `${config.base_url}restaurant_images/${data.restaurant_image}`;
              }
            },
          },
    }
);

const RestaurantPhoto = mongoose.model("restaurantPhoto", restaurantPhotoSchema);
module.exports = RestaurantPhoto

// restaurant_id ref