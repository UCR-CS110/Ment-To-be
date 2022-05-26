const express = require("express");
const router = express.Router();
const passport = require("../passport/passport-index");
const User = require('../models/user.js');

/**
* @return {array} - returns an array of all users stored in database
*/
router.get("/getUsers", function (req, res) {
  User.find().lean().then(item => {
    res.json(item)
  });
});

/**
* @queryparam {string} param email - unique id of users
* @bodyparam {string} param body - all initial form data (see jeanette's doc)
* @return {obj} - returns updated user 
*/
router.post("/:email/update", function (req, res) {
  const email = req.params.email;
  // const body = {
  //   "birthday":"01/31/2000",
  //   "gender": "female",
  //   "location": "LA",
  //   "bio": "hi",
  //   "degree" : "cs bs",
  //   "school" : "ucr",
  //   "career_goal" : "swe",
  //   "age" : "22",
  //   "major" : ["computer science", "data_science"]
  // }
  const body = req.body;
  const update = {"$set": {major: body.major, language: body.language, jobs: body.jobs, mentor_topics: body.mentor_topics, mentee_topics: body.mentee_topics, programming_languages: body.programming_languages,
    birthday: body.birthday, gender: body.gender,location:body.location, bio: body.bio, school: body.school, degree: body.degree, career_goal: body.career_goal, age: body.career_goal}}
  User.findOneAndUpdate({email: email}, update).exec(function(err, profile){
    if(profile == undefined){
      res.status(404).send("Profile not found.");
    }else{
      res.json(profile);
    }
  });
});
/**
* @queryparam {string} param email - unique id of users
* @bodyparam {number} param rating 
* @return {obj} if user found - profile is sent back
*               if user not found - 404
*/
router.post("/:email/addRating", function (req, res) {
  const email = req.params.email;
  const update = { $push: { ratings: 5} }
  User.findOneAndUpdate({email: email}, update).exec(function(err, profile){
    if(profile == undefined){
      res.status(404).send("Profile not found.");
    }else{
      res.json(profile);
    }
  });
});

/**
* @queryparam {string} param email - unique id of users
* @return {obj} if user found - profile is sent back
*                       if user not found - 404
*/
router.get("/:email", function (req, res) {
  const email = req.params.email;
  User.findOne({email: email}).exec(function(err, profile){
    if(err){
      res.send("Error:", error);
    }else if(profile == undefined){
      res.status(404).send("Profile not found.");
    }else{
      res.status(200);
      res.send(profile);
    }
  });
});



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
