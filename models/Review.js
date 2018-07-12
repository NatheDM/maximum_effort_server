var mongoose = require("mongoose");

var UserReview = new mongoose.Schema({
  nameUser: String,
  nameLocation: String,
  locCity: String,
  locState: String,
  locStreet: String,
  locZip: Number,
  locPicture: String,
  reviewBody: String
});

mongoose.model("Review", UserReview, "USER_REVIEWS");
