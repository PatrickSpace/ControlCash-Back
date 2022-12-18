const Card = require("../model/Card");
module.exports = {
  add: async function (card) {
    try {
      const newCard = new Card(card);
      const saved = await newCard.save(card);
      return saved;
    } catch (err) {
      console.log(err);
    }
  },
};
