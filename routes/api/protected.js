var router = require("express").Router();
var passport = require("passport");

router.get("/", passport.authenticate("jwt", { session: false }), function(
  req,
  res,
  next
) {
  console.log("bad times");
  return res.json("good times");
});

module.exports = router;
