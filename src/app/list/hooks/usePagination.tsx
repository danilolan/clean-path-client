import { useState, useCallback, MouseEvent } from "react";

export default function usePagination(initialRowsPerPage: number = 5) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(initialRowsPerPage);
  const [totalCount, setTotalCount] = useState<number>(0);

  const handleChangePage = useCallback(
    (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  const updateTotalCount = useCallback((newTotal: number) => {
    setTotalCount(newTotal);
  }, []);

  return {
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalCount,
    updateTotalCount,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}
