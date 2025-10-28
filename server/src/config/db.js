import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

const db = await mysql.createConnection({
  host: process.env.DB_HOST,//host name
  user: process.env.DB_USER,//username
  password: process.env.DB_PASSWORD,//password
  database: process.env.DB_NAME,//database name
});

export default db;
