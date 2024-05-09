const express = require("express");
const router = express.Router();
const historicoController = require("../controllers/historicoController");
const middleware = require("../controllers/middlewareController");

router.get("/historicos", historicoController.getAll);
router.get("/historicos/:id", historicoController.getById);
router.post(
  "/historicos",
  middleware.isAuthenticated,
  historicoController.create
);
router.put(
  "/historicos/:id",
  middleware.isAuthenticated,
  historicoController.update
);
router.delete(
  "/historicos/:id",
  middleware.isAuthenticated,
  historicoController._delete
);

module.exports = router;
