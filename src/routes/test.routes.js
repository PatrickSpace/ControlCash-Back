const express = require("express");
const router = express.Router();
const userController = require("../entities/user/controller/UserController");

router.get("/", userController.test);

module.exports = router;
