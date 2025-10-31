import { io, Socket } from "socket.io-client";
import { API_BASE } from "@/api";

let socket: Socket | null = null;

export const initSocket = () => {
  if (socket) return socket;

  const root = API_BASE.replace("/api", "");

  socket = io(root, {
    // Initialize socket
    transports: ["websocket"],
    reconnection: true,
  });

  socket.on("connect", () => console.log("Socket connected:", socket.id)); //connect
  socket.on("connect_error", (err) =>
    console.error("socket connection error:", err.message)
  );
  socket.on("disconnect", (reason) =>
    console.warn("Socket disconnected:", reason)
  );

  return socket;
};

// Get existing socket / initialize new
export const getSocket = () => {
  if (!socket) return initSocket();
  return socket;
};
