const Card = require("../model/Card");

module.exports = {
  findAll: async function () {
    try {
      const list = await Card.find();
      return list;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  findById: async function (id) {
    try {
      const obj = await Card.findById(id);
      return obj;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  findByName: async function (name) {
    try {
      const obj = await Card.find({ name: name });
      return obj;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
