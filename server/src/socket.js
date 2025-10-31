
// // Initialize Socket.IO
// export const initSocket = (io) => {
//   io.on('connection', (socket) => { // connection event
//     console.log('Client connected:', socket.id);

//     socket.on('disconnect', () => {
//       console.log('Client disconnected:', socket.id);
//     });
//   });
// };



import { createMessage } from './models/messageModel.js';

export const initSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    // Optional: public room
    socket.on('join', (room) => {
      console.log(`${socket.id} joined room: ${room}`);
      socket.join(room);
    });

    // Receive message
    socket.on('public_message', async (message) => {
      try {
        console.log('Received message:', message);

        // Save message to DB
        const savedMessage = await createMessage(
          message.user_id,
          message.text
        );

        // Broadcast to all not sender
        socket.broadcast.emit("receive_message", message);

      } catch (error) {
        console.error('Error saving message:', error);
      }
    });

    socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
    });
  });
};


