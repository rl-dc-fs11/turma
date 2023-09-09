require("dotenv").config()

const express = require("express");

const linkRoute = require("./routes/linkRoute");

const app = express();

app.use(express.json());

app.use(linkRoute)

app.listen(8080, () => {
  console.log("Estou loico!");
});
