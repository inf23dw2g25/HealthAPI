const express = require("express");
const router = express.Router();
const especialistaController = require("../controllers/especialidadeController");
const middleware = require("../controllers/middlewareController");

router.get("/especialidades", especialistaController.getAll);
router.get("/especialidades/:id", especialistaController.getById);
router.post(
  "/especialidades",
  middleware.isAuthenticated,
  especialistaController.create
);
router.put(
  "/especialidades/:id",
  middleware.isAuthenticated,
  especialistaController.update
);
router.delete(
  "/especialidades/:id",
  middleware.isAuthenticated,
  especialistaController._delete
);
router.get(
  "/especialidades/:id/especialistas",
  especialistaController.getEspecialistasByEspecialidade
);

module.exports = router;
