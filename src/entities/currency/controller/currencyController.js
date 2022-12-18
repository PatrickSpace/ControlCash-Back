const addCurrency = require("../usecase/addCurrency");
const deleteCurrency = require("../usecase/deleteCurrency");

module.exports = {
  agregar: async function (req, res) {
    try {
      const moneda = req.body.moneda;
      const moneda_guardada = await addCurrency.add(moneda);
      res.status(200).json({
        msg: "Moneda agregada correctamente",
        id: moneda_guardada._id,
      });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrió un error al agrgar la moneda" });
      console.log(error);
    }
  },
  borrar: async function (req, res) {
    try {
      const id = req.params.id;
      const rpta = await deleteCurrency.delete(id);
      res.status(200).json({ msg: rpta });
    } catch (error) {
      res.status(400).json({ msg: "Ocurrió un error al borrar la moneda" });
      console.log(error);
    }
  },
};
