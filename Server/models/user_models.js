const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  phone: { type: String, require: true },
  isAdmin: { type: Boolean, default: false },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(5);

    const hassPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hassPassword;
  } catch (error) {
    next(error);
  }
});

const UserModel = new mongoose.model("User", userSchema);

module.exports = UserModel;
