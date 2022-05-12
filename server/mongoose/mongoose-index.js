const mongoose = require("mongoose"); // mongodb object modeling tool

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

module.exports = mongoose;
