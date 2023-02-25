const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 3000;
const { PythonShell } = require("python-shell");
const options = {
  scriptPath: "",
  args: ["wwe"],
};
PythonShell.run("py.py", options, (err, result) => {
  if (err) console.log(err);
  if (result) console.log(result);
});
// PythonShell.run("python.py", options, (err, result) => {
//   if (err) console.log(err);
//   if (result) console.log(result);
// });

//var apidata = require("./data.json");
const { url } = require("inspector");

app.get("/", (req, res) => {
  res.send("Hello i am live");
});

app.get("/am", async (req, res) => {
  const a = req.query.a;
  // console.log(a);
  options.args[0] = a;
  console.log("hii");
  await PythonShell.run("python.py", options, (err) => {
    if (err) {
      console.log(err);
    }
  });

  const apidata2 = require("./data.json");
  // console.log(apidata2);
  // res.sent(`/am?a=${a}`);
  res.send(apidata2);
});

app.get("/service", (req, res) => {
  res.send(apidata);
});
app.listen(port, () => {
  console.log("i am live again");
});
