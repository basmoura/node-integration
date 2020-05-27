var express = require("express");
var app = express();

app.get("/mirth", (req, res, next) => {
  console.log(req.query.hl7);
  res.json(req.query.hl7);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
