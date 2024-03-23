const Home = async (req, res) => {
  try {
    res.send("Weilcome to Home Page again with auth controllers");
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  try {
    res.send("welcome to register page with auth controllers");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home, Register };
