const Concept = require("../model/Concept");

module.exports = {
  findAll: async function () {
    try {
      const list = await Concept.find();
      return list;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  findById: async function (id) {
    try {
      const obj = await Concept.findById(id);
      return obj;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  findByName: async function (name) {
    try {
      const obj = await Concept.find({ name: name });
      return obj;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
