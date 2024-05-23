const express = require("express");
const router = express.Router();
const historicoController = require("../controllers/historicoController");
const middleware = require("../controllers/middlewareController");

router.get("/historicos", historicoController.getAll);
router.get("/historicos/:id", historicoController.getById);
router.post("/historicos", historicoController.create);
router.put("/historicos/:id", historicoController.update);
router.delete("/historicos/:id", historicoController._delete);

module.exports = router;
