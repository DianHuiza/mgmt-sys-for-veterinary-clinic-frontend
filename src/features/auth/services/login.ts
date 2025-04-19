import apiClient from '../../../core/api/apiClient';

export function loginService(email, password) {
  return apiClient.post('/auth/login', { email, password });
}