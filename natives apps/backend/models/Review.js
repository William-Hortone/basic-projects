const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    unique: true,
  },
  review: {
    type: String,
    required: true,
  },

  update: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
