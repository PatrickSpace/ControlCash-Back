const Currency = require("../model/Currency");
module.exports = {
  delete: async function (id) {
    try {
      await Currency.findByIdAndDelete(id);
      return "La tarjeta se ha eliminado correctamente";
    } catch (error) {
      console.log(error);
    }
  },
};
