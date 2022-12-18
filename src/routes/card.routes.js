const express = require("express");
const router = express.Router();
const cardController = require("../entities/card/controller/cardController");

router.delete("/:id", cardController.borrar);
router.get("/", cardController.listar_todos);
router.get("/:id", cardController.listar_id);
router.post("/", cardController.agregar);
module.exports = router;
