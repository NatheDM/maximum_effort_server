var router = require("express").Router();
("use strict");
var crypto = require("crypto");

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
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
}

saltHashPassword("MYPASSWORD");

async function checkUser(username, password) {
  //... fetch user from a db etc.

  const match = await crypto.compare(password, userProfile.passwordHash);

  if (match) {
    //login
  }

  //...
}
router.use("/api", require("./api"));

module.exports = router;
