const addConcept = require("../usecase/addConcept");
const findConcept = require("../usecase/findConcept");
const deleteConcept = require("../usecase/deleteConcept");

module.exports = {
  agregar: async function (req, res) {
    try {
      const concepto = req.body.concepto;
      const concepto_guardado = await addConcept.add(concepto);
      res.status(200).json({
        msg: "Concepto agregado correctamente",
        id: concepto_guardado._id,
      });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrió un error al agrgar el concepto" });
      console.log(error);
    }
  },
  listar_todos: async function (req, res) {
    try {
      const lista = await findConcept.findAll();
      res.status(200).json({ items: lista });
    } catch (error) {
      res
        .status(400)
        .json({ msg: "Ocurrió un error al recuperar la lista de conceptos" });
      console.log(error);
    }
  },
  listar_id: async function (req, res) {
    try {
      const id = req.params.id;
      const concepto = await findConcept.findById(id);
      res.status(200).json({ item: concepto });
    } catch (error) {
      res
        .status(400)
        .json({ msg: "Ocurrió un error al recuperar el concepto" });
      console.log(error);
    }
  },
  borrar: async function (req, res) {
    try {
      const id = req.params.id;
      const rpta = await deleteConcept.delete(id);
      res.status(200).json({ msg: rpta });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrió un error al borrar el concepto" });
      console.log(error);
    }
  },
};
