import axios, { InternalAxiosRequestConfig } from 'axios';
import { BOOK_API_URL } from '~/constants';

const api = axios.create({
  baseURL: BOOK_API_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
