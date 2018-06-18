var router = require("express").Router();

router.use("/profiles", require("./user-profiles"));

module.exports = router;
