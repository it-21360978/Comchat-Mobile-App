import express from 'express';
import { fetchMessages , postMessage } from '../controllers/messageController.js';
const router = express.Router();


// Fetch messages
router.get('/', fetchMessages);
// Post message
router.post('/', postMessage);



export default router;
