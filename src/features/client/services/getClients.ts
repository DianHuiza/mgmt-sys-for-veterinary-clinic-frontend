import apiClient from '../../../core/api/apiClient'

interface GetClientsParams {
  search: string;
  page: number;
  sortBy: string;
  sortDirection: "asc" | "desc";
  showDeleted: boolean;
}

export const getClients = async (params: GetClientsParams) => {
  const response = await apiClient.get(`/clients`, {params})
  return response.data
}