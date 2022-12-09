const { Schema, model } = require("mongoose");

const debtSchema = new Schema({
  card: { ref: "Card", type: Schema.Types.ObjectId, required: true },
  total_amount: { type: Number, required: true },
  quantity: { type: Number, required: true }, //numero de cuotas
  interest: { type: Number, required: true },
});
module.exports = model("Debt", debtSchema);
