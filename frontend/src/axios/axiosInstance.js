// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Your base URL
  timeout: 10000, // Optional timeout
  headers: {
    'Content-Type': 'application/json', // Default Content-Type
  },
});

// Optional: Add an interceptor for responses
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally if needed
    return Promise.reject(error);
  }
);

export default axiosInstance;
