import { getMessages, createMessage } from '../models/messageModel.js';


// Fetch recent messages
export const fetchMessages = async (req, res) => {
  try {
    const messages = await getMessages(50); // limit
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Post a new message
export const postMessage = async (req, res) => {
  try {
    const { user_id, text } = req.body; // get user_id and text
    if (!user_id || !text) return res.status(400).json({ error: 'user_id and text are required' }); //validation

    const newMessage = await createMessage(user_id, text); 

    // Emit to Socket.IO
    const io = req.app.get('io'); 
    io.emit('message:new', newMessage); 
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error posting message:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
