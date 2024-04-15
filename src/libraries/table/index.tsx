import React from "react";
import TableHeader from "./TableHeader";
import { CircularProgress } from "@mui/material";
import TableBody from "./TableBody";
import Pagination from "./Pagination";

const Table = ({
  headers,
  tableData,
  TableRow,
  rowProps,
  paginationOptions,
}: any) => {
  return (
    <div className="w-full bg-white ">
      <div className="overflow-x-auto w-full  bg-white">
        <table className="min-w-full">
          <thead>
            <TableHeader headers={headers} />
          </thead>
          {tableData?.length > 0 ? (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <TableBody
                rowProps={rowProps}
                TableRow={TableRow}
                data={tableData}
              />
            </tbody>
          ) : tableData?.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={100}>
                  <span className="flex w-full justify-center items-center p-10">
                    Oops.. looks like there is no data
                  </span>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td>
                  <div className="w-full flex justify-center">
                    <CircularProgress />
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
        {paginationOptions && (
          <Pagination paginationOptions={paginationOptions} />
        )}
    </div>
  );
};

export default React.memo(Table);
