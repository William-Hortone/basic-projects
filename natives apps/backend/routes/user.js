const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const verifyTokens = require("../middleware/jwt_token");

router.delete("/", verifyTokens, userControllers.deleteUser);
router.get("/", verifyTokens, userControllers.getUser);

module.exports = router;
