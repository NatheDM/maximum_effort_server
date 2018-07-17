var router = require("express").Router();
const passport = require("passport");
const Profile = require("../../models/Profile.js");
const jwt = require("jsonwebtoken");
var mongoose = require("mongoose");

router.post("/", (req, res, next) => {
  //console.log(req);
  return res.json();
});

// router.post("/register", (req, res, next) => {
//   console.log("/register handler", req.body);
//   Profile.register(
//     new Profile({
//       nameUser: req.body.nameUser,
//       nameFirst: req.body.nameFirst,
//       nameLast: req.body.nameLast,
//       dateBirth: req.body.dateBirth,
//       homeCity: req.body.homeCity,
//       homeState: req.body.homeState,
//       homeZip: req.body.homeZip,
//       email: req.body.email,
//       interest: req.body.interest
//     }),
//     req.body.password,
//     (err, Profile) => {
//       if (err) {
//         return res.status(500).send({ error: err.message });
//       }

//       passport.authenticate("local")(req, res, () => {
//         req.session.save(err => {
//           if (err) {
//             return next(err);
//           }

//           res.status(200).send("Okay");
//         });
//       });
//     }
//   );
// });

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/?error=LoginError",
    failureFlash: true
  }),
  (req, res, next) => {
    console.log("/login handler");
    req.session.save(err => {
      if (err) {
        return next(err);
      }

      //res.status(200).send("OK");
      console.log(req.body.nameUser);
      const nameUser = req.body.nameUser;
      const token = jwt.sign(nameUser, "I shot a man in Reno");
      return res.json({ nameUser, token });
    });
  }
);

module.exports = router;
