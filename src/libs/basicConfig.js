const Rol = require("../entities/user/model/Role");
const Currency = require("../entities/currency/model/Currency");
module.exports = {
  createRol: async function () {
    try {
      const count = await Rol.estimatedDocumentCount();
      if (count > 0) return;
      const values = await Promise.all([new Rol({ nombre: "user" }).save()]);
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  },
  createDefaultCurrency: async function () {
    try {
      const count = await Currency.estimatedDocumentCount();
      if (count > 0) return;
      await new Currency({ name: "Soles", exchangeamount: 1 }).save();
      await new Currency({ name: "Dolares", exchangeamount: 4.1 }).save();
    } catch (error) {
      console.log(error);
    }
  },
};
