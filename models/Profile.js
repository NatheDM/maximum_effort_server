const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

var Profile = new Schema({
  nameUser: String,
  nameFirst: String,
  nameLast: String,
  dateBirth: Date,
  homeCity: String,
  homeState: String,
  homeZip: Number,
  email: String,
  password: String,
  interest: String
});

Profile.plugin(passportLocalMongoose);

module.exports = mongoose.model("Profile", Profile, "USER_PROFILES");
