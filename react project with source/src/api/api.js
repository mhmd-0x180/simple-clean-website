import axios from 'axios';

// Create an axios instance with a relative baseURL
// The Vite proxy will handle forwarding these requests to the backend
const api = axios.create({
  baseURL: '/api',
});

export default api;
