import apiClient from '../../../core/api/apiClient';

export async function loginService(email: string, password: string) {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
}