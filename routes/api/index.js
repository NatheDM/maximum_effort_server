var router = require("express").Router();

router.use("/profiles", require("./Profile.js"));

module.exports = router;
