const express = require("express");
const middleware = require("../controllers/middlewareController");
const perfilController = require("../controllers/perfilController");
const router = express.Router();

// Rota para obter o perfil do usuário
router.get("/perfil", middleware.isAuthenticated, perfilController.getProfile);

module.exports = router;
