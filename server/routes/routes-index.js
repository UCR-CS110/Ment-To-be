const { Router } = require("express");
const express = require("express");
const User = require("../models/user");
const router = express.Router();
const passport = require("../passport/passport-index");
const room_id_generator = require("../util/room_id_generator");
const ChatRoom = require("../models/chatroom");
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

router.post("/:email/addRating", function (req, res) {
  const email = req.params.email;
  const update = { $push: { "mentor_profile.ratings": req.body.rating } };
  User.findOneAndUpdate({ email: email }, update).exec(function (err, profile) {
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

router.get("/:email/getMentor", async (req, res) => {
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
        const matched_users = profile.matched_mentors;
        await Topic.findOne({ topic: mentor_topic }).exec(
          async (err, topic) => {
            const topic_mentors_arr = topic.mentors;
            for (let j = 0; j < topic_mentors_arr.length; j++) {
              if (!matched_users.includes(topic_mentors_arr[j])) {
                var update = {
                  $push: { matched_mentors: topic_mentors_arr[j] },
                };
                await User.findOneAndUpdate({ email: email }, update);
                update = { $push: { matched_mentors: email } };
                await User.findOneAndUpdate(
                  { email: topic_mentors_arr[j] },
                  update
                );
                return res.status(200).json(topic_mentors_arr[j]);
              } else {
                var mentors = await User.find({
                  mentor_profile_exists: true,
                }).exec();
                for (let i = 0; i < mentors.length; i++) {
                  if (
                    !matched_users.includes(mentors[i]) &&
                    mentors[i].email != email
                  ) {
                    var update = { $push: { matched_mentors: mentors[i] } };
                    await User.findOneAndUpdate({ email: email }, update);
                    update = { $push: { matched_mentors: email } };
                    await User.findOneAndUpdate({ email: mentors[i] }, update);
                    return res.status(200).json(mentors[i]);
                  }
                }
                return res.status(200).json("No mentor available");
              }
            }
          }
        );
      } else {
        return res
          .status(400)
          .json("User is not a mentor and cannot be assigned a mentor.");
      }
    }
  });
});

/**
 * @queryparam {string} param email - unique id of user
 * @bodyparam {string} param body - mentor form data (language(str), bio(str), year(str), career_goal(str), mentor_topic(str))
 * @return {obj} - returns updated user if success
 */
router.post("/:email/updateMentorProfile", function (req, res) {
  const email = req.params.email;
  const body = req.body;
  const update = {
    $set: {
      language: body.language,
      bio: body.bio,
      "mentor_profile.mentor_degree": body.mentor_degree,
      "mentor_profile.mentor_career_goal": body.career_goal,
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

// /**
//  * @queryparam {string} param email - unique id of user
//  * @bodyparam {string} param body - mentor form data (language(str), bio(str), jobs(array[{company:str,job_title:str}]), expertise(str), mentor_topic(str))
//  * @return {obj} - returns updated user if success
//  */
// router.post("/:email/updateMentorProfile", function (req, res) {
//   const email = req.params.email;
//   const body = req.body;
//   const update = {
//     $set: {
//       language: body.language,
//       bio: body.bio,
//       "mentor_profile.mentor_jobs": body.jobs,
//       "mentor_profile.expertise": body.expertise,
//       "mentor_profile.mentor_topic": body.mentor_topic,
//       mentor_profile_exists: true,
//     },
//   };
//   User.findOneAndUpdate({ email: email }, update).exec(function (err, profile) {
//     if (profile == undefined) {
//       res.status(404).send("Profile not found.");
//     } else {
//       res.status(200).json(profile);
//     }
//   });
// });
/**
 * @queryparam {string} param email - unique id of users
 * @bodyparam {number} param rating (num)
 * @return {obj} if user found - profile is sent back
 *               if user not found - 404
 */
router.post("/:email/addRating", function (req, res) {
  const email = req.params.email;
  const update = { $push: { "mentor_profile.ratings": req.body.rating } };
  User.findOneAndUpdate({ email: email }, update).exec(function (err, profile) {
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
  "/register/mentor-profile-test",
  check_user_logged_in,
  (req, res) => {
    let mentor_profile = {};
    mentor_profile.mentor_email = req.body.mentor_email;
    mentor_profile.mentor_university = req.body.mentor_university;
    mentor_profile.mentor_language = req.body.mentor_language;
    mentor_profile.mentor_about = req.body.mentor_about;
    mentor_profile.mentor_career_goals = req.body.mentor_career_goals;
    mentor_profile.mentor_looking_for_mentor =
      req.body.mentor_looking_for_mentor;
    mentor_profile.mentor_etc_info = req.body.mentor_etc_info;

    User.findById(req.session.passport.user.google_id)
      .then((user) => {
        return User.assign(user, { mentor_profile_exists: true });
        // return User.assign(user, {$set : mentor_profile});
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
  "/register/mentor-profile",
  check_user_logged_in,
  async function (req, res, cb) {
    const mentor_profile = {};
    mentor_profile.mentor_email = req.body.mentor_email;
    mentor_profile.mentor_university = req.body.mentor_university;
    mentor_profile.mentor_language = req.body.mentor_language;
    mentor_profile.mentor_degree = req.body.mentor_degree;
    mentor_profile.mentor_career_goals = req.body.mentor_career_goals;
    mentor_profile.mentor_topic = req.body.mentor_topic;

    var user_id = req.session.passport.user._id;
    console.log(
      "Registering mentor profile:",
      mentor_profile,
      " on _id: ",
      user_id
    );

    let user = await User.findByIdAndUpdate(user_id, {
      mentor_profile_exists: true,
      $set: { mentor_profile: mentor_profile },
    });
    if (user) {
      console.log("found user, updating mentor profile");
      res.json({
        user,
      });
      req.session.passport.user.mentor_profile = mentor_profile;

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

// CHATROOM ROUTES
router.post("/chat/:room_name", function (req, res) {
  const new_chatroom = new ChatRoom({
    name: req.params.room_name,
    room_id: room_id_generator.room_id_generator(),
    pic:
      "https://joeschmoe.io/api/v1/random" +
      room_id_generator.room_id_generator(),
  });
  new_chatroom
    .save()
    .then(console.log("Room has been added"))
    .catch((err) => console.log("Error when creating room:", err));
});

router.get("/chat/available_rooms", function (req, res) {
  ChatRoom.find()
    .lean()
    .then((item) => {
      res.json(item);
    });
});

router.get("/chat/find_room/:room_id", function (req, res) {
  try {
    const id = req.params.room_id;
    console.log(id);
    ChatRoom.findOne({ room_id: id })
      .lean()
      .then((item) => {
        console.log(item);
        return res.json(item);
      });
  } catch (err) {
    console.log(err);
    return res.json([]);
  }
});

module.exports = router;
