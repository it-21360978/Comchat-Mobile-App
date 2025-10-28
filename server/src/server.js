import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import { initSocket } from './socket.js';

dotenv.config();

// Express setup
const app = express();
const server = createServer(app); // HTTP server
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Middlewares
app.use(cors());
app.use(express.json());

// Trim URLs to remove accidental newlines or spaces
// app.use((req, res, next) => {
//   req.url = req.url.replace(/\s/g, ''); // removes all spaces/newlines
//   console.log('Incoming request:', req.method, req.url);
//   next();
// });


// Routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

//default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// io available controllers
app.set('io', io);

// Socket setup
initSocket(io);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
   
});

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
