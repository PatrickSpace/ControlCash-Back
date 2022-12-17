const Card = require("../model/Card");
module.exports = {
  delete: async function (id) {
    try {
      await Card.findByIdAndDelete(id);
      return "La tarjeta se ha eliminado correctamente";
    } catch (error) {
      console.log(error);
    }
  },
};
