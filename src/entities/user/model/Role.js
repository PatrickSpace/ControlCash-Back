const { Schema, model } = require("mongoose");

const rolSchema = new Schema(
  { nombre: { type: String } },
  { versionKey: false }
);

module.exports = model("Role", rolSchema);
