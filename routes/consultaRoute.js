const express = require("express");
const consultaController = require("../controllers/consultaController");
const middleware = require("../controllers/middlewareController");

const router = express.Router();

// Rotas para manipular as operações CRUD das consultas
router.get("/consultas", consultaController.list);
router.post("/consultas", consultaController.create);
router.get("/consultas/:id", consultaController.getById);
router.put("/consultas/:id", consultaController.update);
router.delete("/consultas/:id", consultaController.delete);

module.exports = router;
