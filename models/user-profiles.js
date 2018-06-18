var mongoose = require("mongoose");

var UserProfile = new mongoose.Schema({
  nameLast: String,
  nameUser: String,
  dateBirth: Date,
  homeCity: String,
  homeState: String,
  homeZip: Integer,
  email: Email,
  password: String,
  interest: String
});

mongoose.model("Profile", UserProfile);
