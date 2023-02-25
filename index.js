const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const port = process.env.port || 3000;

app.use(cors());
const apidata = require("./data.json");
const { spawn } = require("child_process");

app.get("/", (req, res) => {
  var dataToSend;
  const python = spawn("python", ["script1.py"]);
  python.stdout.on("data", function (data) {
    console.log("pipedata from python script . . . ");
    dataToSend = data.toString();
  });
  closed;
  python.on("close", (code) => {
    console.log("child process close all stdio with code ${code}");
    res.send(dataToSend);
  });
  res.send("Hello i am live");
});

app.get("/service", () => {
  res.send(apidata);
});

app.listen(port, () => {
  console.log("i am live again");
});
