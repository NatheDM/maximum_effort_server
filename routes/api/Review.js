var router = require("express").Router();
var mongoose = require("mongoose");
var Review = mongoose.model("Review");

router.get("/", (req, res, next) => {
  return Review.find().then(rvw => {
    //console.log(rvw);
    return res.json(rvw);
  });
});

router.get(":id", (req, res, next) => {
  return Review.find(rvw => {
    //console.log(req.params.id);
    return rvw._id == parseInt(req.params.id);
  }).then(rvw => {
    //console.log(res.json(rvw));
    return res.json(rvw);
  });
});

router.post("/", (req, res, next) => {
  //console.log(req);
  let rvw = new Review({
    nameUser: req.body.nameUser,
    nameLocation: req.body.nameLocation,
    locCity: req.body.locCity,
    locState: req.body.locState,
    locStreet: req.body.locStreet,
    locZip: req.body.locZip,
    reviewBody: req.body.reviewBody,
    center: {
      lat: 33.557732,
      lng: -111.88928499999997
    },
    username: "deputy"
  });

  /* router.post(":id", (req, res, next) => {
    let rvw = new Review({
      nameUser: req.body.nameUser,
      locCity: req.body.locCity,
      locState: req.body.locState,
      locZip: req.body.locZip,
      reviewBody: req.body.reviewBody
    });
  }); */

  //console.log(rvw);

  rvw.save(err => {
    if (err) console.log(err);
  });

  return Review.find().then(rvw => {
    return res.json(rvw);
  });
});

module.exports = router;
