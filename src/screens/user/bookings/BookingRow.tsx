import React from "react";

// type productRowType = {
//   ele: any;
// };
const BookingRow = (props: any) => {
  const { ele } = props;
console.log(ele)
  return (
    <tr className="hover:bg-gray-100 cursor-pointer" key={ele?.booking?.id}>      
      <td className="tableBodyTd">{ele?.date}</td>
      <td className="tableBodyTd">{ele?.startTime}</td>
      <td className="tableBodyTd">{ele?.endTime}</td>
      <td className="tableBodyTd">{ele?.sport}</td>
    </tr>
  );
};

export default React.memo(BookingRow);
