var router = require("express").Router();
var mongoose = require("mongoose");
var Profile = mongoose.model("Profile");

router.get("/", function(req, res, next) {
  console.log("get profiles");
  return Profile.find().then(function(prfl) {
    return res.json(prfl);
  });
});

router.post("/", (req, res, next) => {
  console.log(req);
  let prfl = new Profile({
    nameFirst: req.body.nameFirst,
    nameLast: req.body.nameLast,
    nameUser: req.body.nameUser,
    dateBirth: req.body.dateBirth,
    homeCity: req.body.homeCity,
    homeState: req.body.homeState,
    homeZip: req.body.homeZip,
    email: req.body.email,
    password: req.body.password,
    interest: req.body.interest
  });

  console.log(prfl);

  prfl.save(err => {
    if (err) console.log(err);
  });
});

module.exports = router;
