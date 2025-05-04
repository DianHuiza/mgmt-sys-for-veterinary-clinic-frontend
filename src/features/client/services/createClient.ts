import apiClient from '../../../core/api/apiClient';

export async function createClient(client: any) {
  const response = await apiClient.post('/clients', client);
  return response.data;
}