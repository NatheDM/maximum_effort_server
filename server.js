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

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

/* // Connect to the database before starting the application server.
mongodb.MongoClient.connect(
  process.env.MONGODB_URI ||
    "mongodb://admin:Maximum_Effort2@ds261460.mlab.com:61460/maximum_effort",
  function(err, client) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function() {
      var port = server.address().port;
      console.log("App now running on port", port);
    });
  }
);

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

app.get("/api/profiles", function(req, res) {
  db.collection(USER_PROFILES)
    .find({})
    .toArray(function(err, docs) {
      if (err) {
        handleError(res, error.message, "Failed to get profiles.");
      } else {
        res.status(200).json(docs);
      }
    });
});

app.post("/api/profiles", function(req, res) {
  console.log("adding profile");
  console.log(req.body);
  var newProfile = req.body;

  db.collection(USER_PROFILES).insertOne(newProfile, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new profile.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.delete("/api/profiles/:userID", function(req, res) {
  console.log(parseInt(req.params.userID));
  db.collection(USER_PROFILES).deleteOne(
    { _id: new mongodb.ObjectID(req.params.userID) },
    function(err, result) {
      if (err) {
        console.log("failed");
      }
      console.log("success");
      console.log(result);
      console.log(result.deletedCount);
      res.status(200).json(req.params.userID);
    }
  );
});

app.get("/api/page1", function(req, res) {});

app.get("/api/page2", function(req, res) {});

app.get("/api/page3", function(req, res) {}); */

mongoose.connect(
  "mongodb://admin:Maximum_Effort2@ds261460.mlab.com:61460/maximum_effort"
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database synced up.");
});

require("./models/user-profiles");
var Profile = mongoose.model("Dwarf");

var routes = require("./routes");
app.use(require("./routes"));

var server = app.listen(process.env.PORT || 8080, () => {
  var port = server.address().port;
  console.log("App running on port ", port);
});
