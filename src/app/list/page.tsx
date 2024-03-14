"use client";

import Table from "./components/table";
import { FilterProvider } from "./context/useFilter";

export type Customer = {
  name: string;
  email: string;
  phone: string;
  position: {
    x: number;
    y: number;
  };
};

export default function List() {
  return (
    <FilterProvider>
      <Table />
    </FilterProvider>
  );
}
