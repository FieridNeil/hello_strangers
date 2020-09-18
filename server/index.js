const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3002 });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let clients = new Map();

const signup = require("./signup");
const login = require("./login");

app.use("/signup", signup);
app.use("/login", login);

app.get("/", (req, res) => {
  res.json({ status: "HIT" });
});

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    clients.set(message.id, message.data);
    console.log("Received: ", JSON.parse(message));
  });
  ws.send("Sending back from server");
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
