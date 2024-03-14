import { useState } from "react";

export default function useFilter(
  initialFilterKey: string = "",
  initialFilterValue: string = ""
) {
  const [filterValue, setFilterValue] = useState<string>(initialFilterValue);
  const [filterKey, setFilterKey] = useState<string>(initialFilterKey);

  return {
    filterValue,
    setFilterValue,
    filterKey,
    setFilterKey,
  };
}
