require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const connectDB = require("./utils/db");

const app = express();
app.use(express.json());
const PORT = 5050;

app.use("/api/auth", router);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Coonecte to MongoDb");
    console.log(`Server is Running at Port ${PORT}`);
  } catch (error) {
    console.log("error", error.message);
  }
});
