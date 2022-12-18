const express = require("express");
const router = express.Router();
const cardController = require("../entities/card/controller/cardController");

router.get("/", cardController.listar_todos);
router.get("/:id", cardController.listar_id);
router.post("/", cardController.agregar);
router.delete("/:id", cardController.borrar);

module.exports = router;
