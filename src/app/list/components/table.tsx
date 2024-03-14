"use client";

import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as MuiTable,
  TableFooter,
  TablePagination,
  CircularProgress,
} from "@mui/material";
import useSWR from "swr";
import { AllCustomersDTO } from "@/types/dtos";
import FilterInput from "./filter-input";
import useTable from "../hooks/useTable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useFilter from "../hooks/useFilter";
import usePagination from "../hooks/usePagination";
import useSort from "../hooks/useSort";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

export default function Table() {
  const { filterValue, setFilterValue, filterKey, setFilterKey } = useFilter();
  const { sort, order, handleSortChange } = useSort();
  const {
    page,
    rowsPerPage,
    totalCount,
    handleChangePage,
    handleChangeRowsPerPage,
    updateTotalCount,
  } = usePagination();

  const { data, isLoading } = useSWR<AllCustomersDTO>(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/customers?page=${
      page + 1
    }&limit=${rowsPerPage}&filter=${filterValue}&key=${filterKey}&sort=${sort}&order=${order}`,
    async (url: string) => {
      const response = await fetch(url);
      const data: AllCustomersDTO = await response.json();
      updateTotalCount(data.total);
      return data;
    }
  );

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className="flex flex-col gap-8">
      <FilterInput
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        filterkey={filterKey}
        setFilterkey={setFilterKey}
      />
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className="text-primary font-bold cursor-pointer"
                onClick={() => handleSortChange("id")}
              >
                Id{" "}
                {sort === "id" &&
                  (order === "ASC" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  ))}
              </TableCell>
              <TableCell
                className="text-primary font-bold cursor-pointer"
                onClick={() => handleSortChange("name")}
              >
                Name
                {sort === "name" &&
                  (order === "ASC" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  ))}
              </TableCell>
              <TableCell
                className="text-primary font-bold cursor-pointer"
                onClick={() => handleSortChange("email")}
              >
                Email
                {sort === "email" &&
                  (order === "ASC" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  ))}
              </TableCell>
              <TableCell
                className="text-primary font-bold cursor-pointer"
                onClick={() => handleSortChange("phone")}
              >
                Phone
                {sort === "phone" &&
                  (order === "ASC" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  ))}
              </TableCell>
              <TableCell className="text-primary font-bold cursor-pointer">
                Position
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.customers?.map(({ name, email, phone, position, id }) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>
                  <div className="flex">
                    <span className="font-bold text-primary mr-2">X:</span>
                    <p>{position.x}</p>
                  </div>
                  <div className="flex">
                    <span className="font-bold text-primary mr-2">Y:</span>
                    <p>{position.y}</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={totalCount}
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </MuiTable>
      </TableContainer>
    </div>
  );
}
