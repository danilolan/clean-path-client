import { useState, useCallback } from "react";

export default function useSort(
  initialSort: string = "",
  initialOrder: "ASC" | "DESC" = "ASC"
) {
  const [sort, setSort] = useState<string>(initialSort);
  const [order, setOrder] = useState<"ASC" | "DESC">(initialOrder);

  const handleSortChange = useCallback(
    (column: string) => {
      if (sort === column) {
        setOrder((prevOrder) => (prevOrder === "ASC" ? "DESC" : "ASC"));
      } else {
        setSort(column);
        setOrder("ASC");
      }
    },
    [sort]
  );

  return {
    sort,
    order,
    handleSortChange,
  };
}
