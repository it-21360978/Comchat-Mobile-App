
// Initialize Socket.IO
export const initSocket = (io) => {
  io.on('connection', (socket) => { // connection event
    console.log('Client connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};
