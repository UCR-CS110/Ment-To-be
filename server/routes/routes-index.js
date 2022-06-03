const express = require("express");
const router = express.Router();
const passport = require("../passport/passport-index");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/logout", function (req, res) {
  res.redirect("http://localhost:3000/");
});

function check_user_logged_in(req, res, next) {
  console.log(`req.session in isloggedin: ${JSON.stringify(req.session)}`);
  console.log(`req.user in isloggedin: ${JSON.stringify(req.user)}`);
  if (req.isAuthenticated()) {
    next();
  } else {
    data = {
      redirect: true,
      url: keys.URL_SIGN_IN,
    };
    res.send(JSON.stringify(data));
  }
}

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  function (req, res) {
    console.log("successful google login authentication, redirecting");

    res.redirect("http://localhost:3000/dashboard");
  }
);

//Protected Route.
router.get("/auth/current-session", check_user_logged_in, (req, res) => {
  res.send(JSON.stringify(req.session.passport.user));
});

module.exports = router;
