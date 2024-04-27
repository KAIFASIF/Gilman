import React from "react";

// type productRowType = {
//   ele: any;
// };
const BookingRow = (props: any) => {
  const { ele } = props;

  console.log(ele)

  return (
    <tr className="hover:bg-gray-100 cursor-pointer" key={ele?.booking?.id}>
      <td className="tableBodyTd">{ele?.name}</td>
      <td className="tableBodyTd">{ele?.mobile}</td>
      <td className="tableBodyTd">{ele?.amountPaid}</td>
      <td className="tableBodyTd">{ele?.paymentId}</td>
      <td className="tableBodyTd">{ele?.booking?.date}</td>
      <td className="tableBodyTd">{ele?.booking?.startTime}</td>
      <td className="tableBodyTd">{ele?.booking?.endTime}</td>
      <td className="tableBodyTd">{ele?.booking?.sport}</td>
    </tr>
  );
};

export default React.memo(BookingRow);
