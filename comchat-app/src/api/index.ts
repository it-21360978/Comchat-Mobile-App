import axios from 'axios';

const BACKEND_HOST = 'http://172.20.10.2:5000'; 
export const API_BASE = `${BACKEND_HOST}/api`;

export const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});
