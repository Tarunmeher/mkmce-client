// src/services/apiService.js
import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // change to your base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request/response interceptors here
api.interceptors.request.use(
  (config) => {
    // Add auth token if needed
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle global errors (like 401)
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

// Unified API call function
const apiRequest = async (method, url, data = {}, config = {}) => {
  try {
    const response = await api({
      method,
      url,
      data: ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) ? data : undefined,
      params: ['GET', 'DELETE'].includes(method.toUpperCase()) ? data : undefined,
      ...config,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default apiRequest;
