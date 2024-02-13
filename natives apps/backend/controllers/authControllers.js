const User = require("../models/User");
const CryptoJs = require("crypto");
// const { request } = require("http");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res, next) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
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

  loginUser: async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "user not found" });
      }

      const decryptedPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.SECRET_KEY
      );
      const decryptedString = decryptedPassword.toString(CryptoJs.enc.utf8);

      if (decryptedString !== request.body.password) {
        return res
          .status(404)
          .json({ status: false, message: "Wrong password" });
      }

      const userToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "21d" }
      );

      const user_id = user._id;

      res.status(200).json({ status: true, id: user_id, token: userToken });
    } catch (error) {
      return next(error);
    }
  },
};
