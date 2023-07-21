import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'test' ? 'http://localhost:3000'  : import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('coding_standards_token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
