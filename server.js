"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/stations", require("./routes"));
app.get("/", (req, res) => {
  res.send("hello");
});

db.on("connected", () => {
  app.listen(3000);
});
