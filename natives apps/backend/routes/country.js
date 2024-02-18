const router = require("express").Router();
const countryControllers = require("../controllers/CountryController");
const verifyTokens = require("../middleware/jwt_token");

router.post("/addCountry", countryControllers.addCountry);
router.post("/addPLaceToCountry", countryControllers.addPLacesToCountry);
router.get("/getCountries", countryControllers.getCountries);

module.exports = router;
