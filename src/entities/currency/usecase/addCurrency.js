const Currency = require("../model/Currency");
module.exports = {
  add: async function (currency) {
    try {
      const newCurrency = new Currency(currency);
      const saved = await newCurrency.save(currency);
      return saved;
    } catch (err) {
      console.log(err);
    }
  },
};
