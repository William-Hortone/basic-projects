const router = require("express").Router();
const placeControllers = require("../controllers/placeController");
const verifyTokens = require("../middleware/jwt_token");

router.post("/addPlace", placeControllers.addPlace);
router.get("/getPlaces", placeControllers.getPlaces);
router.get("/getPlace/:id", placeControllers.getPlace);
router.get("/search/:key", placeControllers.search);

module.exports = router;
