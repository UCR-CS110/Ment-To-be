const path = require('path');   
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/test", (req, res) => {
    res.json({ message: "Hello w0orrld" });});
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});