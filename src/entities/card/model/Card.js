const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  name: { type: String, required: true },
  bank: { type: String, required: true },
  max_amount: { type: Number, required: true },
  consumed_amount: { type: Number, required: true },
  amount_topay: { type: Number, required: true }, // monto a pagar actual
  amount_toextend: { type: Number, required: true }, //pagar despues
  cut_date: { type: Number, required: true },
  pay_date: { type: Number, required: true },
});

module.exports = model("Card", cardSchema);
