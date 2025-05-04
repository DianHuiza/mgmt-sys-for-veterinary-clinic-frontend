import { useContext } from 'react'
import { TableFilterContext } from '../context/TableFilterContext'



export function useTableFilters() {
  const data = useContext(TableFilterContext)
  
  if (!data) {
    throw new Error('useTableFilters must be used within a TableFilterProvider')
  }

  return data
}