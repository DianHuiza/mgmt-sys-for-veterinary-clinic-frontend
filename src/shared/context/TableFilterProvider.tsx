import { useState } from 'react';
import { initialState, TableFilterContext, TableFilters } from './TableFilterContext';

interface TableFilterProviderProps {
  children: React.ReactNode;
}

export const TableFilterProvider: React.FC<TableFilterProviderProps> = ({
  children,
}) => {
  const [filters, setFilters] = useState<TableFilters>(initialState.filters);

  const updateFilters = (newFilters: Partial<TableFilters>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <TableFilterContext.Provider value={{filters, updateFilters}}>
      {children}
    </TableFilterContext.Provider>
  );
};