const express = require("express");
const { Home, Register } = require("../controllers/auth.controller");
const router = express.Router();

router.route("/").get(Home);

router.route("/register").get(Register);

module.exports = router;
