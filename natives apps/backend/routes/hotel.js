const router = require("express").Router();
const hotelControllers = require("../controllers/hotelController");
const verifyTokens = require("../middleware/jwt_token");

router.post("/addHotel", hotelControllers.addHotel);
router.get("/getHotel/:id", hotelControllers.getHotel);
router.get("/getHotelByCountry/:id", hotelControllers.getHotelByCountry);
router.get("/search/:key", hotelControllers.search);

module.exports = router;
