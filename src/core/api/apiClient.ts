import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Incluye las credenciales en todas las peticiones
});

export default apiClient;