const mongoose = require("mongoose");

// const URL = "mongodb://127.0.0.1:27017/mern_admin";

const URL =process.env.MONGODB_URL

// mongoose.connect(URL);

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connection Successful to database");
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDB;
