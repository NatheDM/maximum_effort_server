var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var cors = require("cors");
var flash = require("connect-flash");
var mongodb = require("mongodb");

var ObjectID = mongodb.ObjectID;

var USER_PROFILES = "USER_PROFILES"; //in quotes is the name of the table it goes to/makes

var USER_REVIEWS = "USER_REVIEWS";

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(
  require("express-session")({
    secret: "I shot a man in Reno",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "../build")));

require("./passport");

// passport config
var Profile = require("./models/Profile.js");
passport.use(new LocalStrategy(Profile.authenticate()));
/* passport.serializeUser(
  Profile.serializeUser((parseFloat, done) => {
    done(null, prfl._id);
  })
);
passport.deserializeUser(
  Profile.deserializeUser((IDBCursor, done) => {
    User.findById(id, (err, prfl) => {
      done(err, prfl);
    });
  })
); */
passport.serializeUser(Profile.serializeUser());
passport.deserializeUser(Profile.deserializeUser());

mongoose.set("debug", true);
mongoose.connect(
  "mongodb://admin:Maximum_Effort2@ds261460.mlab.com:61460/maximum_effort",
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database synced up.");
});

require("./models/Review");
var Review = mongoose.model("Review");

var routes = require("./routes");
app.use(require("./routes"));

var server = app.listen(process.env.PORT || 8080, () => {
  var port = server.address().port;
  console.log("App running on port ", port);
});
