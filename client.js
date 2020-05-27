var net = require("net");

var client = new net.Socket();
client.connect(6661, "127.0.0.1", function () {
  console.log("Connected");
  client.write("Alooo Michel");
  client.destroy();
});
