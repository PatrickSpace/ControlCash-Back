const express = require("express");
const router = express.Router();
const currencyController = require("../entities/currency/controller/currencyController");

router.post("/", currencyController.agregar);
router.delete("/:id", currencyController.borrar);

module.exports = router;
