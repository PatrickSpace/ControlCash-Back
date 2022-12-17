const Concept = require("../model/Concept");
module.exports = {
  delete: async function (id) {
    try {
      await Concept.findByIdAndDelete(id);
      return "El concepto se ha eliminado correctamente";
    } catch (error) {
      console.log(error);
    }
  },
};
