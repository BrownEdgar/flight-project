const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json("fake home page")
});

module.exports = router;
