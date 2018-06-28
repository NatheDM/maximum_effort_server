var mongoose = require("mongoose");

var UserReview = new mongoose.Schema({
  nameUser: String,
  nameLocation: String,
  locCity: String,
  locState: String,
  locStreet: String,
  locZip: Number,
  reviewBody: String
});

mongoose.model("Review", UserReview, "USER_REVIEWS");
