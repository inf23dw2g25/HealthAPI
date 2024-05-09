const express = require("express");
const consultaController = require("../controllers/consultaController");
const middleware = require("../controllers/middlewareController");

const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get("/consultas", consultaController.list);
router.post(
  "/consultas",
  middleware.isAuthenticated,
  consultaController.create
);
router.get("/consultas/:id", consultaController.getById);
router.put(
  "/consultas/:id",
  middleware.isAuthenticated,
  consultaController.update
);
router.delete(
  "/consultas/:id",
  middleware.isAuthenticated,
  consultaController.delete
);

module.exports = router;
