const Card = require("../model/Concept");
module.exports = {
  add: async function (concept) {
    try {
      const newCard = new Concept(concept);
      const saved = await newCard.save(concept);
      return saved;
    } catch (err) {
      console.log(err);
    }
  },
};
