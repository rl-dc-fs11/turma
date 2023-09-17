const express = require("express");

const usuarioController = require("../controllers/usuarioController");

const usuarioRoute = express.Router();

usuarioRoute.get("/usuarios", usuarioController.buscar);
usuarioRoute.post("/usuarios", usuarioController.criar);
usuarioRoute.post("/usuarios/login", usuarioController.login);

module.exports = usuarioRoute;
