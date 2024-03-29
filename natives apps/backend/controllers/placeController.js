const Place = require("../models/Places");

module.exports = {
  addPlace: async (req, res, next) => {
    const {
      country_id,
      description,
      imageUrl,
      location,
      title,
      rating,
      review,
      latitude,
      longitude,
    } = req.body;

    try {
      const newPlace = new Place({
        country_id,
        description,
        imageUrl,
        location,
        title,
        rating,
        review,
        latitude,
        longitude,
      });

      await newPlace.save();

      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },
  getPlaces: async (req, res, next) => {
    try {
      const places = await Place.find();
      // {},
      // { _id: 1, review: 1, rating: 1, imageUrl: 1, title: 1, country_id: 1 }
      res.status(200).json({ places });
    } catch (error) {
      return next(error);
    }
  },
  getPlace: async (req, res, next) => {
    const placeId = req.params.id;

    try {
      const place = await Place.findById(
        { _id: placeId },
        { createdAt: 0, updatedAt: 0, __v: 0 }
      );
      // .popular({
      //   path: "popular",
      //   select: "title rating review imageUrl location",
      // });
      res.status(200).json({ place });
    } catch (error) {
      return next(error);
    }
  },

  search: async (req, res, next) => {
    try {
      const results = await Place.aggregate([
        {
          $search: {
            index: "places",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(results);
    } catch (error) {
      return next(error);
    }
  },
};
