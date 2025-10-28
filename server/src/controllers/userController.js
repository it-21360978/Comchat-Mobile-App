import { findOrCreateUser } from '../models/userModel.js';

// Create or find user
export const createUser = async (req, res) => {
  try {
    const { name } = req.body; // get name
    if (!name) return res.status(400).json({ error: 'Name is required' }); //validatetion

    //find or create
    const user = await findOrCreateUser(name);
    res.status(200).json(user); //return user

  } catch (error) {//error 
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
