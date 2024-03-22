const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Weilcome to Home Page");
});

router.route("/register").get((req, res) => {
  res.send("welcome to register page");
});

module.exports = router;
