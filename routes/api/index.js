var router = require("express").Router();

router.use("/profiles", require("./Profile.js"));

router.use("/reviews", require("./Review.js"));

module.exports = router;
