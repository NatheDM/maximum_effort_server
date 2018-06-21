var router = require("express").Router();

router.use("/profiles", require("./Profile"));

module.exports = router;
