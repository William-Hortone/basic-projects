const Hotel = require("../models/Hotel");

module.exports = {
  addHotel: async (req, res, next) => {
    const {
      country_id,
      description,
      imageUrl,
      location,
      title,
      rating,
      review,
      coordinates,
      price,
      availability,
      contact,
    } = req.body;

    try {
      const newHotel = new Hotel({
        country_id,
        description,
        imageUrl,
        location,
        title,
        rating,
        review,
        coordinates,
        price,
        availability,
        contact,
      });
      await newHotel.save();

      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },
  getHotelByCountry: async (req, res, next) => {
    const countryId = req.params.id;

    try {
      const hotels = await Hotel.find({ country_id: countryId });

      if (hotels.length === 0) {
        return res.status(200).json([]);
      }
      res.status(200).json(hotels);
    } catch (error) {
      return next(error);
    }
  },
  getHotel: async (req, res, next) => {
    const hotelId = req.params.id;

    try {
      const hotel = await Hotel.findById({ _id: hotelId });
      //   .popular({
      //     path: "popular",
      //     select: "title rating review imageUrl location",
      //   });

      if (!hotel) {
        return res
          .status(404)
          .json({ error: false, message: "hotel not found" });
      }
      res.status(200).json(hotel);
    } catch (error) {
      return next(error);
    }
  },
};
