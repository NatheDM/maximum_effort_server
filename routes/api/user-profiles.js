var router = require("express").Router();
var mongoose = require("mongoose");
var Profile = mongoose.model("Profile");

router.get("/", function(req, res, next) {
  console.log("get profiles");
  return Profile.find().then(function(prfl) {
    return res.json(prfl);
  });
});

module.exports = router;
