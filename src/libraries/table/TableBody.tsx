import React from "react";

interface tableBodyProps {
  data: any;
  TableRow: any;
  rowProps: any;
}
const TableBody: React.FC<tableBodyProps> = ({
  data,
  TableRow,
  rowProps = {},
}) => {
  return data?.map((ele: any) => {
    return <TableRow {...rowProps} ele={ele} key={ele?.id} />;
  });
};
export default React.memo(TableBody);
