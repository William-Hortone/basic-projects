const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    country: {
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
    region: {
      type: String,
      required: true,
    },
    popular: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Places",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Country", CountrySchema);
