const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

var Review = new mongoose.Schema({
  nameUser: String,
  nameLocation: String,
  locCity: String,
  locState: String,
  locStreet: String,
  locZip: Number,
  locPicture: String,
  reviewBody: String
});

Review.plugin(passportLocalMongoose);

mongoose.model("Review", Review, "USER_REVIEWS");
