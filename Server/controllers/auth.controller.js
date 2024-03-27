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
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await UserModel.findOne({ email });

    if (!userExist) {
      return res.status(400).send({ message: "Invalid Credential" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).send({ message: "Invalid email or Password" });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { Home, Register, Login };
