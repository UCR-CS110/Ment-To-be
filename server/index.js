require("dotenv").config(); // .env

/* DEPENDENCIES */
const path = require("path");
const express = require("express"); // grabbing express module
const mongoose = require("mongoose"); // mongodb object modeling tool
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express(); // use express module to run app
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.static(path.resolve(__dirname, "../client/build")));

const username = "xin_test";
const password = "siH3ODkPnIDMEaID";
const cluster = "cluster0.u9rgw";
const dbname = "ment-to-be-users-db";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
); // connecting to databse
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("connected: mongodb");
});
// mongoose.set("useCreateIndex", true);

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/test", (req, res) => {
  res.json({ message: "Hello w0orrld" });
});

app.get(
  "/dashboard",
  passport.authenticate("bearer", { session: false }),
  function (req, res) {
    res.json(req.user);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  function (req, res) {
    console.log("successful google login authentication, redirecting");
    res.redirect("http://localhost:3000/dashboard/");
  }
);

app.get(
  "/auth-check",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  function (req, res) {
    res.send(req.session.passport.user);
  }
);

app.get("/logout", function (req, res) {
  res.redirect("http://localhost:3000/");
});

const user_schema = new mongoose.Schema(
  {
    google_id: String,
    username: String,
    full_name: String,
    first_name: String,
    last_name: String,
    picture: String,
    email: String,
    access_token: String,
    refresh_token: String,
  },
  { timestamps: true }
); // schema for user logins

user_schema.plugin(passportLocalMongoose);
user_schema.plugin(findOrCreate);

const user = new mongoose.model("user", user_schema); // creating user model

passport.use(user.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
  // The USER object is the "authenticated user" from the done() in authUser function.
  // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.
});

passport.deserializeUser(function (id, done) {
  user.findById(id, function (err, user) {
    done(err, user);
  });
  // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
  // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID, // grabbing client id/secret from .env
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      scope: ["profile", "email"],
    },
    function (access_token, refresh_token, profile, cb) {
      console.log(profile),
        user.findOrCreate(
          {
            google_id: profile.id,
            full_name: profile.displayName,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            picture: profile.photos[0].value,
            email: profile.emails[0].value,
          },
          function (err, user) {
            return cb(err, user);
          }
        );
    }
  )
);
