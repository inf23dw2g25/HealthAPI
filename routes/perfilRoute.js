const express = require("express");
const perfilController = require("../controllers/perfilController");
const middleware = require("../controllers/middlewareController");
const router = express.Router();

router.get("/perfil", middleware.isAuthenticated, perfilController.getProfile);

module.exports = router;
