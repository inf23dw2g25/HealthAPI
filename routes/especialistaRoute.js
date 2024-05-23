const express = require("express");
const router = express.Router();
const especialistaController = require("../controllers/especialistaController");
const middleware = require("../controllers/middlewareController");

router.get("/especialistas", especialistaController.getAll);
router.get("/especialistas/:id", especialistaController.getById);
router.post("/especialistas", especialistaController.create);
router.put("/especialistas/:id", especialistaController.update);
router.delete("/especialistas/:id", especialistaController._delete);
router.get(
  "/especialistas/:id/consultas",
  especialistaController.getConsultasByEspecialista
);

module.exports = router;
