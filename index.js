const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./src/routes/api");
require("dotenv").config();

app.use(express.json());
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

// server
const port = process.env.PORT || 8000;

// Connect to DB and start server
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/", router);

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});
