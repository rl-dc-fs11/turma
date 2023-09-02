const express = require("express");

const usuarioController = require("../controllers/usuarioController");

const usuarioRoute = express.Router();

usuarioRoute.get("/usuarios", usuarioController.buscar);

usuarioRoute.get("/usuarios/:id", usuarioController.buscarPeloId);

usuarioRoute.post("/usuarios", usuarioController.criar);

usuarioRoute.delete("/usuarios/:id", usuarioController.apagar);


module.exports = usuarioRoute;
