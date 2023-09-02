const express = require("express");

const usuarioRoute = require("./routes/usuarioRoute");

const app = express();

app.use(express.json());

app.use(usuarioRoute)

app.listen(8080, () => {
  console.log("Estou loico!");
});
