import express from "express";
import expressWs from "express-ws";

const app = express();
expressWs(app);

const sockets = {};

app.use(express.json());

// listen
app.listen(3001, () => {
  console.log("Connect to port 3001");
});

app.post("/:topicId", (req, res) => {
  const { topicId } = req.params;
  const msg = req.body;

  const topicSockets = sockets[topicId] || [];

  for (const socket of topicSockets) {
    socket.send(JSON.stringify(msg));
  }
});

app.ws("/:topicId", (socket, req) => {
  const { topicId } = req.params;

  // see nullable ?? usages - js 2020 cool feature null coalescing operator
  if (!sockets[topicId]) {
    sockets[topicId] = [];
  }

  //const topicSockets = sockets[topicId] ?? [];
  const topicSockets = sockets[topicId];
  topicSockets.push(socket);

  // remove the closed socket from our list of sockets
  socket.on("close", () => {
    topicSockets.splice(topicSockets.indexOf(socket), 1);
  });
});
