const User = require("../models/User");

const CryptoJs = require("crypto");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res, next) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY),
    });

    try {
      await newUser.save();

      res
        .status(201)
        .json({ status: true, message: "User created successfully" });
    } catch (error) {
      return next(error);
    }
  },
};
