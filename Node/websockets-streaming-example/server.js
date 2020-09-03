import express from "express";
import expressWs from "express-ws";

const app = express();
expressWs(app);

const messages = [{ id: 0, text: "Welcome!", userName: "Chat Room" }];
const sockets = [];

app.use(express.json());

app.listen(3001, () => {
  console.log("Connect to port 3001");
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const msg = req.body;
  messages.push(msg);

  for (const socket of sockets) {
    socket.send(JSON.stringify(msg));
  }
});

app.ws("/messages", (socket) => {
  sockets.push(socket);

  // remove the closed socket from our list of sockets
  socket.on("close", () => {
    sockets.splice(sockets.indexOf(socket), 1);
  });
});
