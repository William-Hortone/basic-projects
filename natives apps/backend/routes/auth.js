const router = require("express").Router();

const authController = require("../controllers/authControllers");

router.post("/register", authController.createUser);
router.post("/login", authController.loginUser);

// http://localhost:5003/api/users/deleteUser
module.exports = router;
