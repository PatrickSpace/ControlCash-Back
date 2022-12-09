const { Schema, model } = require("mongoose");

const conceptSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { ref: "Currency", Type: Schema.Types.ObjectId, required: true },
  type: { type: String, required: true }, // activo o pasivo
  card: { ref: "Card", Type: Schema.Types.ObjectId, required: false },
});

module.exports = model("Concept", conceptSchema);
