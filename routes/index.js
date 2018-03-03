var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "spExplorer", version: "0.0.2" });
});

module.exports = router;
