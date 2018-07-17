var router = require("express").Router();

router.use("/protected", require("./protected"));

router.use("/auth", require("./Auth.js"));

router.use("/profiles", require("./Profile.js"));

router.use("/reviews", require("./Review.js"));

module.exports = router;
