const { Router } = require("express");
const express = require("express");
const User = require("../models/user");
const router = express.Router();
const passport = require("../passport/passport-index");

const Topic = require("../models/topic.js");

/**
 * @return {array} - returns an array of all users stored in database
 */
router.get("/getUsers", function (req, res) {
  User.find()
    .lean()
    .then((item) => {
      res.json(item);
    });
});

router.get("/search/:search_string", async (req, res) => {
  try {
    const title = req.params.search_string;
    console.log(title);
    User.find({
      $or: [
        { first_name: new RegExp("^" + title + "$", "i") },
        { last_name: new RegExp("^" + title + "$", "i") },
      ],
    })
      .lean()
      .then((item) => {
        return res.json(item);
      });
  } catch (err) {
    console.log(err);
    return res.json([]);
  }
});

/**
* @return {array} - matches a mentee to the Mentor based on topic. If the topic mentor has chose has no users signed up, a new Ment
  "No mentee available" will be sent back.
*/
router.get("/:email/getMentee", async (req, res) => {
  const email = req.params.email;
  await User.findOne({ email: email }).exec(async (err, profile) => {
    if (err) {
      console.log("400");
      return res.status(400).json("Error:", error);
    } else if (profile == undefined) {
      console.log("400");
      return res.status(404).json("Profile not found.");
    } else {
      if (profile.mentor_profile_exists) {
        const mentor_topic = profile.mentor_profile.mentor_topic;
        const matched_users = profile.matched_mentees;
        await Topic.findOne({ topic: mentor_topic }).exec(
          async (err, topic) => {
            const topic_mentees_arr = topic.mentees;
            for (let j = 0; j < topic_mentees_arr.length; j++) {
              if (!matched_users.includes(topic_mentees_arr[j])) {
                var update = {
                  $push: { matched_mentees: topic_mentees_arr[j] },
                };
                await User.findOneAndUpdate({ email: email }, update);
                update = { $push: { matched_mentors: email } };
                await User.findOneAndUpdate(
                  { email: topic_mentees_arr[j] },
                  update
                );
                return res.status(200).json(topic_mentees_arr[j]);
              } else {
                var mentees = await User.find({
                  mentee_profile_exists: true,
                }).exec();
                for (let i = 0; i < mentees.length; i++) {
                  if (
                    !matched_users.includes(mentees[i]) &&
                    mentees[i].email != email
                  ) {
                    var update = { $push: { matched_mentees: mentees[i] } };
                    await User.findOneAndUpdate({ email: email }, update);
                    update = { $push: { matched_mentors: email } };
                    await User.findOneAndUpdate({ email: mentees[i] }, update);
                    return res.status(200).json(mentees[i]);
                  }
                }
                return res.status(200).json("No mentee available");
              }
            }
          }
        );
      } else {
        return res
          .status(400)
          .json("User is not a mentor and cannot be assigned a mentee.");
      }
    }
  });
});

/**
 * @queryparam {string} param email - unique id of user
 * @bodyparam {string} param body - mentee form data (language(str), bio(str), year(str), career_goal(str), mentee_topic(str))
 * @return {obj} - returns updated user if success
 */
router.post("/:email/updateMenteeProfile", function (req, res) {
  const email = req.params.email;
  const body = req.body;
  const update = {
    $set: {
      language: body.language,
      bio: body.bio,
      "mentee_profile.mentee_year": body.year,
      "mentee_profile.mentee_career_goal": body.career_goal,
      "mentee_profile.mentee_topic": body.mentee_topic,
      mentee_profile_exists: true,
    },
  };
  User.findOneAndUpdate({ email: email }, update).exec(function (err, profile) {
    if (profile == undefined) {
      res.status(404).send("Profile not found.");
    } else {
      res.status(200).json(profile);
    }
  });
});

/**
 * @queryparam {string} param email - unique id of user
 * @bodyparam {string} param body - mentor form data (language(str), bio(str), jobs(array[{company:str,job_title:str}]), expertise(str), mentor_topic(str))
 * @return {obj} - returns updated user if success
 */
router.post("/:email/updateMentorProfile", function (req, res) {
  const email = req.params.email;
  const body = req.body;
  const update = {
    $set: {
      language: body.language,
      bio: body.bio,
      "mentor_profile.mentor_jobs": body.jobs,
      "mentor_profile.expertise": body.expertise,
      "mentor_profile.mentor_topic": body.mentor_topic,
      mentor_profile_exists: true,
    },
  };
  User.findOneAndUpdate({ email: email }, update).exec(function (err, profile) {
    if (profile == undefined) {
      res.status(404).send("Profile not found.");
    } else {
      res.status(200).json(profile);
    }
  });
});
/**
 * @queryparam {string} param email - unique id of users
 * @bodyparam {array} param endorsements (array of numbers that correspond to our 4 endorsements)
 * @bodyparam {string} param compliment 
 * @return {obj} if user found - profile is sent back
 *               if user not found - 404
 */
router.post("/endorsements/:email", async function (req, res, cb) {
  const email = req.params.email;
  const body = req.body;
  const update = { $push: { "mentor_profile.compliments": body.compliment } };
  User.findOneAndUpdate({ email: email }, update);

  var user = await User.findOne({ email: email });
  var endorsements_arr = user.mentor_profile.endorsements; 
  if(endorsements_arr.length == 0){
    endorsements_arr = [0,0,0,0]
  }

  for(let i = 0; i < body.endorsements.length; i++){
    if(body.endorsements[i] != 0){
      endorsements_arr[i] += 1;
    }
  }
  
  const update2 = { $set: { "mentor_profile.endorsements": endorsements_arr} };
  User.findOneAndUpdate({ email: email }, update2).exec(function (err, profile) {
    if (profile == undefined) {
      res.status(404).send("Profile not found.");
    } else {
      res.status(200).send(profile);
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
  User.findOne({ email: email }).exec(function (err, profile) {
    if (err) {
      res.send("Error:", error);
    } else if (profile == undefined) {
      res.status(404).send("Profile not found.");
    } else {
      res.status(200).send(profile);
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

    res.redirect("http://localhost:3000/check-user-status");
  }
);

//Protected Route.
router.get("/auth/current-session", check_user_logged_in, (req, res) => {
  res.send(JSON.stringify(req.session.passport.user));
});

router.post(
  "/register/mentee-profile-test",
  check_user_logged_in,
  (req, res) => {
    let mentee_profile = {};
    mentee_profile.mentee_email = req.body.mentee_email;
    mentee_profile.mentee_university = req.body.mentee_university;
    mentee_profile.mentee_language = req.body.mentee_language;
    mentee_profile.mentee_about = req.body.mentee_about;
    mentee_profile.mentee_career_goals = req.body.mentee_career_goals;
    mentee_profile.mentee_looking_for_mentor =
      req.body.mentee_looking_for_mentor;
    mentee_profile.mentee_etc_info = req.body.mentee_etc_info;

    User.findById(req.session.passport.user.google_id)
      .then((user) => {
        return User.assign(user, { mentee_profile_exists: true });
        // return User.assign(user, {$set : mentee_profile});
      })
      .then((user) => {
        return user.save();
      })
      .then((user) => {
        res.json({
          msg: "model updated",
          user,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  }
);

router.post(
  "/register/mentee-profile",
  check_user_logged_in,
  async function (req, res, cb) {
    const mentee_profile = {};
    mentee_profile.mentee_email = req.body.mentee_email;
    mentee_profile.mentee_university = req.body.mentee_university;
    mentee_profile.mentee_language = req.body.mentee_language;
    mentee_profile.mentee_year = req.body.mentee_year;
    mentee_profile.mentee_career_goals = req.body.mentee_career_goals;
    mentee_profile.mentee_topic = req.body.mentee_topic;

    var user_id = req.session.passport.user._id;
    console.log(
      "Registering mentee profile:",
      mentee_profile,
      " on _id: ",
      user_id
    );

    let user = await User.findByIdAndUpdate(user_id, {
      mentee_profile_exists: true,
      $set: { mentee_profile: mentee_profile },
    });
    if (user) {
      console.log("found user, updating mentee profile");
      res.json({
        user,
      });
      req.session.passport.user.mentee_profile = mentee_profile;

      req.session.save();
      cb(null, user);
    } else {
      console.log("error, couldnt find user");
    }
    res.end();
  }
);

// router.post("/register/mentee-profile",  passport.authenticate("google", { scope: ["profile", "email"] }), async (req, res) => {
//   try {
//    let mentee_profile = {};
//     mentee_profile.mentee_email = req.body.mentee_email;
//     mentee_profile.mentee_university = req.body.mentee_university;
//     mentee_profile.mentee_language = req.body.mentee_language;
//     mentee_profile.mentee_about =req.body.mentee_about;
//     mentee_profile.mentee_career_goals = req.body.mentee_career_goals;
//     mentee_profile.mentee_looking_for_mentor = req.body.mentee_looking_for_mentor;
//     mentee_profile.mentee_etc_info = req.body.mentee_etc_info;

//     let user = await User.findByIdAndUpdate({ google_id: profile.id }, {mentee_profile_exists : true, $set : {mentee_profile} });
//     if (user)
//     {
//       console.log("found user, updating mentee profile")
//         res.json({
//             updatedPlot
//         });
//     } else {
//       console.log("error, couldnt find user")
//     }

//   } catch {
//     console.log(err);
//   }

// });

module.exports = router;
