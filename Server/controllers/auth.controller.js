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
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home, Register };
