var mqtt = require("mqtt");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 5556 });

//initialize the MQTT client
var client = mqtt.connect("mqtt://io.adafruit.com", {
  username: "lou4y",
  password: "aio_SIUq77rM3LVqe4pXGEGZCxvH7PjF",
});

//setup the callbacks
client.on("connect", function () {
  console.log("Connected");
});

client.on("error", function (error) {
  console.log(error);
});



// subscribe to topic 'my/test/topic'

client.subscribe(`${client.options.username}/f/box1`);

wss.on("connection", (ws) => {
  console.log("connected");

  client.on("message", function (topic, message) {
    //Called each time a message is received
    console.log("Received message:", topic, message.toString());
    setTimeout(() => {
      ws.send(JSON.stringify({data:message.toString()}))
    }, 1000);
  });
  
  ws.on("close", function () {
    console.log("Connection Closed");
  });
});