import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type FilterContextType = {
  filterValue: string;
  setFilterValue: (value: string) => void;
  filterKey: string;
  setFilterKey: (key: string) => void;
};

type FilterProviderProps = {
  children: ReactNode;
};

const defaultValue: FilterContextType = {
  filterValue: "",
  setFilterValue: () => {},
  filterKey: "",
  setFilterKey: () => {},
};

export const FilterContext = createContext<FilterContextType>(defaultValue);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filterKey, setFilterKey] = useState("");

  const value = useMemo(
    () => ({
      filterValue,
      setFilterValue,
      filterKey,
      setFilterKey,
    }),
    [filterValue, filterKey]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
