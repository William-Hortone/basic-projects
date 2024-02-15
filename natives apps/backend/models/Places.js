const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
  {
    country_id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },

    popular: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Places", PlaceSchema);
