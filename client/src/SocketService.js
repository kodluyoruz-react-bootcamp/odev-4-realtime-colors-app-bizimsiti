import { io } from "socket.io-client";

let socket;

export const initSocket = () => {
  socket = io("https://damp-sierra-05560.herokuapp.com/", {
    transports: ["websocket"],
  });
  console.log("connecting...");
  socket.on("connect", () => console.log("connected"));
};

export const disconnectSocket = () => {
  console.log("disconnecting...");
  if (socket) socket.disconnect();
};

export const sendColor = (color) => {
  if (socket) socket.emit("new-color", color);
};

export const recieveColor = (cb) => {
  if (!socket) return true;
  socket.on("recieve-color", (color) => {
    cb(color);
  });
};

export const getInitialColor = (cb) => {
  if (!socket) return true;
  socket.on("color-data", (data) => {
    cb(data);
  });
};
