import React from "react";

interface tableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<tableHeaderProps> = ({ headers }) => {
  return (
    <tr className="bg-gray-200">
      {headers &&
        headers.length > 0 &&
        headers.map((ele: any) => (
          <th
            scope="col"
            key={ele}
            className="px-6 py-3 text-start text-xs font-semibold text-gray-800  whitespace-pre"
          >
            {ele}
          </th>
        ))}
    </tr>
  );
};

export default React.memo(TableHeader);
