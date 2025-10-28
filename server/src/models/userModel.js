import db from '../config/db.js';

// Find user by name or create if exists
export const findOrCreateUser = async (name) => {
  const [existing] = await db.query('SELECT * FROM users WHERE name = ?', [name]); //check user exists
//return user
  if (existing.length > 0) return existing[0];

// Create new user
  const [result] = await db.query('INSERT INTO users (name) VALUES (?)', [name]);
//return new
  const [newUser] = await db.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
  return newUser[0];
};
