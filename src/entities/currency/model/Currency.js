const { Schema, model } = require("mongoose");

const currencySchema = new Schema({
  name: { type: String, required: true },
  exchangeamount: { type: Number, required: true },
});

module.exports = model("Currency", currencySchema);
