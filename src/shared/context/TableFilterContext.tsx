import { createContext } from "react";

export interface TableFilters {
  search: string;
  sortBy: string;
  sortDirection: "asc" | "desc";
  page: number;
  showDeleted: boolean;
}

interface TableFilterContextType {
  filters: TableFilters;
  updateFilters: (newFilters: Partial<TableFilters>) => void;
}

export const initialState: TableFilterContextType = {
  filters: {
    search: "",
    sortBy: "name",
    sortDirection: "asc",
    page: 1,
    showDeleted: false,
  },
  updateFilters: () => {},
};

export const TableFilterContext =
  createContext<TableFilterContextType>(initialState);



