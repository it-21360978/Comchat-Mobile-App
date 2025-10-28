import axios from 'axios';

export const API_URL = 'http://YOUR_BACKEND_URL:5000/api';

export const api = axios.create({
  baseURL: API_URL,
});
