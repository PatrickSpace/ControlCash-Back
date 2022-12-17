const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
  name: { type: String, required: true },
  bank: { type: String, required: true },
  maxa_mount: { type: Number, required: true },
  consumed_amount: { type: Number, required: true },
  amount_topay: { type: Number, required: true }, // monto a pagar actual
  amount_toextend: { type: Number, required: true }, //pagar despues
  cut_date: { type: Date, required: true },
  pay_date: { type: Date, required: true },
});

module.exports = model("Card", cardSchema);
