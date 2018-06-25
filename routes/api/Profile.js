var router = require("express").Router();
var mongoose = require("mongoose");
var Profile = mongoose.model("Profile");

router.get("/", (req, res, next) => {
  // console.log("get profiles");
  return Profile.find().then(prfl => {
    console.log(prfl);
    return res.json(prfl);
  });
});

router.get(":id", (req, res, next) => {
  return Profile.find(prfl => {
    console.log(req.params.id);
    return prfl._id == parseInt(req.params.id);
  }).then(prfl => {
    console.log(res.json(prfl));
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

  router.post(":id", (req, res, next) => {
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
  });

  console.log(prfl);

  prfl.save(err => {
    if (err) console.log(err);
  });
  return Profile.find().then(prfl => {
    return res.json(prfl);
  });
});

module.exports = router;
