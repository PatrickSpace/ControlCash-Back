const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, required: true },
  user: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    ref: "Role",
    type: Schema.Types.ObjectId,
    required: true,
  },
});

userSchema.statics.encryptPassword = async (psw) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(psw, salt);
};

userSchema.statics.matchPassword = async function (psw, savedpsw) {
  return await bcrypt.compare(psw, savedpsw);
};

module.exports = model("User", userSchema);
