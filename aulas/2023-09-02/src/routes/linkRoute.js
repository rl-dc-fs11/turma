const express = require("express");

const linkController = require("../controllers/linkController");

const linkRoute = express.Router();

linkRoute.get("/links", linkController.buscar);

linkRoute.post("/links", linkController.criar);

linkRoute.get("/links/:code", linkController.buscarPeloCode);

module.exports = linkRoute;
