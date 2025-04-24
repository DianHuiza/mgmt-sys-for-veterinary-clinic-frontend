import apiClient from '../../../core/api/apiClient';

export const verifyService = async () => {
  const response = await apiClient.get('/auth/verify');
  return response.data;
};