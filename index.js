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
  const queryText = req.query.queryText;
  // const getFile = async () => {
  //   return JSON.parse(fs.readFileSync("./data.json"));
  // };
  async function main() {
    const links = await searchGoogle(queryText);
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
app.listen(port, () => {
  console.log("i am live again");
});
