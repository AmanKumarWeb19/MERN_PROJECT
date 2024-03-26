const UserModel = require("../models/user_models");

const Home = async (req, res) => {
  try {
    res.send("Weilcome to Home Page again with auth controllers");
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, phone } = req.body;

    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.status(400).send({ msg: "email Already Exist." });
    }
    const userCreated = await UserModel.create({
      username,
      email,
      password,
      phone,
    });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home, Register };
