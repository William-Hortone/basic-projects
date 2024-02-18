const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
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
    coordinates: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    contact: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    facilities: {
      wifi: { type: Boolean, default: true },
      parking: { type: Boolean, default: true },
      ac: { type: Boolean, default: true },
      tv: { type: Boolean, default: true },
    },
    availability: {
      start: { type: Date },
      end: { type: Date },
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Hotel", HotelSchema);
