const Review = require("../models/Review");

module.exports = {
  addReview: async (req, res, next) => {
    const user = req.user.id;
    const { place, rating, review } = req.body;

    try {
      const existingReview = await Review.findOne({ place, user });
      if (existingReview) {
        (existingReview.rating = rating), (existingReview.review = review);

        await existingReview.save();
      } else {
        const review = new Review({
          place,
          rating,
          review,
          user,
        });

        await review.save();
      }

      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },
};
