const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const redis = require("redis");
const pub = redis.createClient();

app.use(bodyParser.json());
app.post("/mirth", (req, res, next) => {
  channel = req.body["order"];
  pub.publish(channel, JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
