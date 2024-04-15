import { TablePagination } from "@mui/material";
import React from "react";

interface paginationProps {
  paginationOptions: {
    count: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    size: number;
    setSize: React.Dispatch<React.SetStateAction<number>>;
  };
}
const Pagination: React.FC<paginationProps> = ({ paginationOptions }) => {
  const { count, page, size, setPage, setSize } = paginationOptions;
  return (
    <div className="w-full mt-10 flex justify-end items-center">
      <TablePagination
        rowsPerPageOptions={[5, 7, 10, 50, 100]}
        component="div"
        className="table-pagination"
        count={Number(count)}
        rowsPerPage={size}
        page={page}
        onPageChange={(_, newPage: number) => setPage(newPage)}
        onRowsPerPageChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSize(Number(e.target.value));
        }}
        showFirstButton
        showLastButton
        labelDisplayedRows={({ from, to, page }) =>
          `Page: ${page + 1} of ${Math.floor(count / size - 1) + 1} ${
            (to + 1 - from) % 10 !== 0 ? `(${to + 1 - from} rows)` : ""
          }`
        }
      />
    </div>
  );
};

export default React.memo(Pagination);
