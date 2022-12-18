const addCard = require("../usecase/addCard");
const findCard = require("../usecase/findCard");
const deleteCard = require("../usecase/deleteCard");
const Card = require("../model/Card");

module.exports = {
  agregar: async function (req, res) {
    try {
      const tarjeta = req.body.tarjeta;
      const tarjeta_guardada = await addCard.add(tarjeta);
      res.status(200).json({
        msg: "Tarjeta agregada correctamente",
        id: tarjeta_guardada._id,
      });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrió un error al agrgar la tarjeta" });
      console.log(error);
    }
  },
  listar_todos: async function (req, res) {
    try {
      const lista = await findCard.findAll();
      res.status(200).json({ items: lista });
    } catch (error) {
      res
        .status(400)
        .json({ msg: "Ocurrió un error al recuperar la lista de tarjetas" });
      console.log(error);
    }
  },
  listar_id: async function (req, res) {
    try {
      const id = req.params.id;
      const tarjeta = await findCard.findById(id);
      res.status(200).json({ item: tarjeta });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrió un error al recuperar la tarjeta" });
      console.log(error);
    }
  },
  borrar: async function (req, res) {
    try {
      const id = req.params.id;
      const rpta = await deleteCard.delete(id);
      res.status(200).json({ msg: rpta });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrió un error al borrar la tarjeta" });
      console.log(error);
    }
  },
};
