const express = require("express");
const router = require("./router/auth-router");

const app = express();

const PORT = 5050;

app.use("/api/auth", router);

app.listen(PORT, () => {
  console.log(`Server is Running at Port ${PORT}`);
});
