const Home = async (req, res) => {
  try {
    res.send("Weilcome to Home Page with controller");
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  try {
    res.send("welcome to register page with controllers");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home, Register };
