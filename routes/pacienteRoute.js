const express = require("express");
const pacienteController = require("../controllers/pacienteController");
const middleware = require("../controllers/middlewareController");
const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get("/pacientes", pacienteController.getAll);
router.post(
  "/pacientes",
  middleware.isAuthenticated,
  pacienteController.create
);
router.get("/pacientes/:id", pacienteController.getById);
router.put(
  "/pacientes/:id",
  middleware.isAuthenticated,
  pacienteController.update
);
router.delete(
  "/pacientes/:id",
  middleware.isAuthenticated,
  pacienteController._delete
);
router.get(
  "/pacientes/:id/consultas",
  pacienteController.getConsultasByPaciente
);
router.get(
  "/pacientes/:id/historicos",
  pacienteController.getHistoricoByPaciente
);

module.exports = router;
