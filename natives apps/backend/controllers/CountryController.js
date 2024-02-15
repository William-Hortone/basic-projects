const Country = require("../models/Country");

module.exports = {
  addCountry: async (req, res, next) => {
    const { country, description, imageUrl, region, popular } = req.body;

    try {
      const newCountry = new Country({
        country,
        description,
        imageUrl,
        region,
        popular,
      });

      await newCountry.save();

      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },

  addPLacesToCountry: async (req, res, next) => {},

  getCountries: async (req, res, next) => {
    // To find also county, _id and imageUrl
    try {
      const countries = await Country.find(
        {},
        { country: 1, _id: 1, imageUrl: 1 }
      );

      res.status(200).json({ countries });
    } catch (error) {
      return next(error);
    }
  },
  getCountry: async (req, res, next) => {},
};
