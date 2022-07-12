const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//get the root page
app.get("/", (req, res) => {});

app.post("/post", (req, res) => {
  console.log("Connected to React");
});

app.post("/", (req, res) => {
  console.log(JSON.stringify(req.body, null, 4));
  res.status(200).send(req.body);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
