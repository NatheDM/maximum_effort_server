//-------------------------------------------
/* var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongo = require("mongodb"); */
//--------------------------------------------

var router = require("express").Router();

router.use("/profiles", require("./Profile.js"));

router.use("/reviews", require("./Review.js"));

module.exports = router;
