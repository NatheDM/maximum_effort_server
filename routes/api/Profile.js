var router = require("express").Router();
var mongoose = require("mongoose");
var Profile = mongoose.model("Profile");
var crypto = require("crypto");
const passport = require("passport");

router.get("/", (req, res, next) => {
  return Profile.find().then(prfl => {
    // console.log(prfl);
    return res.json(prfl);
  });
});

router.get(":id", (req, res, next) => {
  return Profile.find(prfl => {
    // console.log(req.params.id);
    return prfl._id == parseInt(req.params.id);
  }).then(prfl => {
    // console.log(res.json(prfl));
    return res.json(prfl);
  });
});

var genRandomString = function(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
};

var sha512 = function(password, salt) {
  var hash = crypto.createHmac("sha512", salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest("hex");
  return {
    salt: salt,
    passwordHash: value
  };
};

function saltHashPassword(UserProfilepassword) {
  var salt = genRandomString(16); /** Gives us salt of length 16 */
  var passwordData = sha512(UserProfilepassword, salt);
  console.log("UserProfilePassword = " + UserProfilepassword);
  console.log("Passwordhash = " + passwordData.passwordHash);
  console.log("nSalt = " + passwordData.salt);
  return passwordData;
}

router.post("/", (req, res, next) => {
  console.log("/register handler", req.body);
  Profile.register(
    new Profile({
      nameUser: req.body.nameUser,
      nameFirst: req.body.nameFirst,
      nameLast: req.body.nameLast,
      dateBirth: req.body.dateBirth,
      homeCity: req.body.homeCity,
      homeState: req.body.homeState,
      homeZip: req.body.homeZip,
      email: req.body.email,
      interest: req.body.interest,
      username: req.body.nameUser
    }),
    req.body.password,
    (err, Profile) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send({ error: err.message });
      }

      passport.authenticate("local")(req, res, () => {
        req.session.save(err => {
          if (err) {
            return next(err);
          }

          res.status(200).send("Okay");
        });
      });
    }
  );
});

module.exports = router;
