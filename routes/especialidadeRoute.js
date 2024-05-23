const express = require("express");
const router = express.Router();
const especialistaController = require("../controllers/especialidadeController");
const middleware = require("../controllers/middlewareController");

router.get("/especialidades", especialistaController.getAll);
router.get("/especialidades/:id", especialistaController.getById);
router.post("/especialidades", especialistaController.create);
router.put("/especialidades/:id", especialistaController.update);
router.delete("/especialidades/:id", especialistaController._delete);
router.get(
  "/especialidades/:id/especialistas",
  especialistaController.getEspecialistasByEspecialidade
);

module.exports = router;
