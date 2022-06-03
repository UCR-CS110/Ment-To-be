require("dotenv").config(); // .env
require("./mongoose/mongoose-index"); // mongoose

/* DEPENDENCIES */
const path = require("path");
const express = require("express"); // grabbing express module
const app = express(); // use express module to run app
const routes = require("./routes/routes-index.js");
const passport = require("./passport/passport-index");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const json_parser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(json_parser)
app.use(urlencodedParser)

app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/test", (req, res) => {
  res.json({ message: "Hello w0orrld" });
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
