const express = require("express");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const searchGoogle = require("./searchGoogle");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 3000;
const { url } = require("inspector");
app.get("/", async (req, res) => {
  const a = req.query.a;
  console.log(a);
  const getFile = async () => {
    return JSON.parse(fs.readFileSync("./data.json"));
  };
  async function main() {
    const links = await searchGoogle(a);
    res.send(links);
    console.log(links);
    // fs.writeFile(filePath, JSON.stringify(data), (err) => {
    //   if (err) throw err;
    //   console.log('Data written to file');
    // });
  }

  main();
  //res.send(await getFile());
});

app.get("/service", (req, res) => {
  res.send(apidata);
});
app.listen(port, () => {
  console.log("i am live again");
});
