import axios from 'axios';
import { useUserStore } from '@/stores';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
    const { data } = error.response;

    if (data === 'Unauthorized') {
      useUserStore().setUser({});
      localStorage.removeItem('coding_standards_token');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
