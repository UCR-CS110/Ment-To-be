const User = require("../models/user.js");
const passport = require("passport");
const { models } = require("mongoose");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
  // The USER object is the "authenticated user" from the done() in authUser function.
  // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
  // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
  // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.
});

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID, // grabbing client id/secret from .env
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "http://localhost:3001/auth/google/callback",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//       scope: ["profile", "email"],
//     },
//     function (req, access_token, refresh_token, profile, cb) {
//       console.log(profile),
//         User.findOrCreate(
//           {
//             google_id: profile.id,
//             full_name: profile.displayName,
//             first_name: profile.name.givenName,
//             last_name: profile.name.familyName,
//             picture: profile.photos[0].value,
//             email: profile.emails[0].value,
//           },

//           (req.user = User),
//           function (err, user) {
//             return cb(err, user);
//           }
//         );
//     }
//   )
// );

passport.use(
  new GoogleStrategy(
    {
      enableProof: true,
      clientID: process.env.CLIENT_ID, // grabbing client id/secret from .env
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      scope: ["profile", "email"],
    },
    async function (req, access_token, refresh_token, profile, cb) {
      const new_user = {
        google_id: profile.id,
        full_name: profile.displayName,
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        picture: profile.photos[0].value,
        email: profile.emails[0].value,
        mentee_profile_exists: false,
        mentor_profile_exists: false,
      };
      try {
        let user = await User.findOne({ google_id: profile.id });

        if (user) {
          console.log("user exists in db");
          req.user = user;
          cb(null, user);
        } else {
          console.log("user does not exist in db, adding");
          user = await User.create(new_user);
          req.user = user;
          cb(null, user);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);

module.exports = passport;
