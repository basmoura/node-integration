const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.post("/mirth", (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
