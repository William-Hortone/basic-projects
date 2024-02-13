const errorHandle = (req, res, next) => {
  return res
    .status(500)
    .json({ status: false, message: "Something went wrong" });
};

module.exports = errorHandle;
