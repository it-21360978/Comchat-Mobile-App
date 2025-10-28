import db from '../config/db.js';

// Get recent messages with user 
export const getMessages = async (limit = 50) => {
  const [rows] = await db.query( 
    'SELECT m.id, m.text, m.created_at, u.name as user_name FROM messages m JOIN users u ON m.user_id = u.id ORDER BY m.created_at DESC LIMIT ?',
    [limit]
  );
  return rows;
};

// Create a new message
export const createMessage = async (userId, text) => {
  const [result] = await db.query('INSERT INTO messages (user_id, text) VALUES (?, ?)', [userId, text]); 
  const [message] = await db.query( 
    'SELECT m.id, m.text, m.created_at, u.name as user_name FROM messages m JOIN users u ON m.user_id = u.id WHERE m.id = ?',
    [result.insertId]
  );
  return message[0];
};
