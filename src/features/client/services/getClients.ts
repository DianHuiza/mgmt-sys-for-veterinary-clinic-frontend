import apiClient from '../../../core/api/apiClient'

export const getClients = async (q: string, page: number = 1) => {
  const response = await apiClient.get(`/clients`, {params: {q, page}})
  return response.data
}