const express = require("express");
const router = express.Router();
const conceptController = require("../entities/concept/controller/conceptController");

router.get("/", conceptController.listar_todos);
router.get("/:id", conceptController.listar_id);
router.post("/", conceptController.agregar);
router.delete("/:id", conceptController.borrar);

module.exports = router;
