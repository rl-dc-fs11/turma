require("dotenv").config()
const cors = require('cors')
const express = require("express");

const usuarioRoute = require("./routes/usuarioRoute");

const app = express();

app.use(cors())
app.use(express.json());

app.use(usuarioRoute)

app.listen(8080, () => {
  console.log("Estou loico!");
});
