import { Server } from "socket.io";
import app from "./app";
import { createServer } from "node:http";

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: {
      origin
    }
  },
  path: "/socket-io",
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
