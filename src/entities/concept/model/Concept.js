const { Schema, model } = require("mongoose");

const conceptSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  currency: { type: String, required: true },
  type: { type: String, required: true }, // activo o pasivo
  card: { type: String, required: false },
});

module.exports = model("Concept", conceptSchema);
