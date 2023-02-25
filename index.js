const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const port = process.env.port || 3000;

app.use(cors());

const apidata = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello i am live");
});
app.get("/service", (req, res) => {
  res.send(apidata);
});
app.listen(port, () => {
  console.log("i am live again");
});
