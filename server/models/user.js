const mongoose = require("../mongoose/mongoose-index");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const user_schema = new mongoose.Schema(
  {
    google_id: String,
    username: String,
    full_name: String,
    first_name: String,
    last_name: String,
    picture: String,
    email: String,
    mentee_profile_exists: Boolean,
    mentor_profile_exists: Boolean,
    language: String,
    bio: String,
    mentee_profile: {
      mentee_email: String,
      mentee_university: String,
      mentee_language: String,
      mentee_year: String,
      mentee_career_goals: String,
      mentee_topic: String,
      endorsements: [Number],
    },
    mentor_profile: {
      mentor_jobs: [{ company: String, job_title: String }],
      mentor_topic: String,
      expertise: [String],
      compliments : [String],
      endorsements: [Number],
    },    
    matched_mentees: [String],
    matched_mentors: [String],
  },
  { timestamps: true }
); // schema for user logins

user_schema.plugin(passportLocalMongoose);
user_schema.plugin(findOrCreate);

const User = new mongoose.model("User", user_schema); // creating user model

module.exports = User;
