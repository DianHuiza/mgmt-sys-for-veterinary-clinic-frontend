import axios from 'axios';
import { refreshTokenMiddlewareConfig } from './refreshTokenMiddleware';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Incluye las credenciales en todas las peticiones
});

refreshTokenMiddlewareConfig(apiClient)

export default apiClient;