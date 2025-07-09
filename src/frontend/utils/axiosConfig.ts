import axios from "axios";

// Configure axios defaults
const api = axios.create({
  baseURL: "https://preparation-time-tracker-backend.onrender.com/",
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor to handle authentication
api.interceptors.request.use(
  (config) => {
    const tokenData = localStorage.getItem('tokenData');
    if (tokenData) {
      try {
        const { token } = JSON.parse(tokenData);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        localStorage.clear();
        // Removed redirect to login
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        localStorage.clear();
        // Removed redirect to login
        return Promise.reject(new Error('Session expired. Please log in again.'));
      }
      // Handle rate limiting
      if (error.response.status === 429) {
        return Promise.reject(new Error('Server is busy. Please try again in a moment.'));
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;
