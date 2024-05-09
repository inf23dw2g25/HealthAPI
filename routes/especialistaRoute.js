const express = require("express");
const router = express.Router();
const especialistaController = require("../controllers/especialistaController");

router.get("/especialistas", especialistaController.getAll);
router.get("/especialistas/:id", especialistaController.getById);
router.post(
  "/especialistas",
  middleware.isAuthenticated,
  especialistaController.create
);
router.put(
  "/especialistas/:id",
  middleware.isAuthenticated,
  especialistaController.update
);
router.delete(
  "/especialistas/:id",
  middleware.isAuthenticated,
  especialistaController._delete
);
router.get(
  "/especialistas/:id/consultas",
  especialistaController.getConsultasByEspecialista
);

module.exports = router;
