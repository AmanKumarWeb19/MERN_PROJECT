const UserModel = require("../models/user_models");
const bcrypt = require("bcryptjs");
const Home = async (req, res) => {
  try {
    res.send("Weilcome to Home Page again with auth controllers");
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.status(400).send({ msg: "email Already Exist." });
    }

    const saltRound = 5;

    const hassPassword = await bcrypt.hash(password, saltRound);

    const userCreated = await UserModel.create({
      username,
      email,
      password: hassPassword,
      phone,
    });

    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated.id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home, Register };
