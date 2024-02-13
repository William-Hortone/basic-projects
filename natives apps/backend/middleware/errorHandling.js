// const errorHandle = (req, res, next) => {
//   return res
//     .status(500)
//     .json({ status: false, message: "Something went wrong" });
// };

// module.exports = errorHandle;
const errorHandle = (err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ status: false, message: err.message });
};

module.exports = errorHandle;
