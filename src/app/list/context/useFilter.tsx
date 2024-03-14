import React, { ReactNode, createContext, useContext, useState } from "react";

// Define o tipo dos valores do contexto
type FilterContextType = {
  filterValue: string;
  setFilterValue: (value: string) => void;
  filterKey: string;
  setFilterKey: (key: string) => void;
};

// Cria o contexto com valores padrão
const FilterContext = createContext<FilterContextType | undefined>(undefined);

type FilterProviderProps = {
  children: ReactNode;
};

// Cria um Provider que encapsula a lógica de estado do filtro
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filterKey, setFilterKey] = useState("");

  const value = { filterValue, setFilterValue, filterKey, setFilterKey };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

// Hook customizado para usar o contexto de filtro
export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
