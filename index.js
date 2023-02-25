const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const port = process.env.port || 3000;
const { PythonShell } = require("python-shell");
let options = {
  scriptPath: "",
  args: ["john"],
};
PythonShell.run("python.py", options, (err, result) => {
  if (err) console.log(err);
  if (res) console.log(res);
});

app.use(cors());

var apidata = require("./data.json");
const { url } = require("inspector");

app.get("/", (req, res) => {
  res.send("Hello i am live");
});

app.get("/ram", (req, res) => {
  let a = req.query.a;
  console.log(a);
  options.args = [a];
  PythonShell.run("python.py", options, (err, result) => {
    if (err) console.log(err);
    if (res) console.log(res);
  });
  apidata = require("./data.json");
  res.send(apidata);
});

app.get("/service", (req, res) => {
  res.send(apidata);
});
app.listen(port, () => {
  console.log("i am live again");
});
