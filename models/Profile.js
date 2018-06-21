var mongoose = require("mongoose");

var UserProfile = new mongoose.Schema({
  nameFirst: String,
  nameLast: String,
  nameUser: String,
  dateBirth: Date,
  homeCity: String,
  homeState: String,
  homeZip: Number,
  email: String,
  password: String,
  interest: String
});

mongoose.model("Profile", UserProfile, "USER_PROFILES");
