var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var cors = require("cors");
var mongoose = require("mongoose");

var ObjectID = mongodb.ObjectID;

var USER_PROFILES = "USER_PROFILES"; //in quotes is the name of the table it goes to/makes

var USER_REVIEWS = "USER_REVIEWS";

var app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb://admin:Maximum_Effort2@ds261460.mlab.com:61460/maximum_effort"
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database synced up.");
});

require("./models/Profile");
var Profile = mongoose.model("Profile");

require("./models/Review");
var Review = mongoose.model("Review");

var routes = require("./routes");
app.use(require("./routes"));

var server = app.listen(process.env.PORT || 8080, () => {
  var port = server.address().port;
  console.log("App running on port ", port);
});
