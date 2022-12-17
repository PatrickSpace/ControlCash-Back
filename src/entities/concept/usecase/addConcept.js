const Concept = require("../model/Concept");
module.exports = {
  add: async function (concept) {
    try {
      const newconcept = new Concept(concept);
      const saved = await newconcept.save(concept);
      return saved;
    } catch (err) {
      console.log(err);
    }
  },
};
