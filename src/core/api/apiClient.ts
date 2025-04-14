import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Cambia esto por tu URL base
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Incluye las credenciales en todas las peticiones
});

export default apiClient;