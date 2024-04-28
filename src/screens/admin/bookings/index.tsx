// import React, { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
// import { authAtom } from "../../../recoil/authAtom";
// import {
//   addSlot,
//   deleteSlot,
//   getBookings,
// } from "../../../services/bookingApiService";
// import Button from "../../../components/Button";

// const Bookings = () => {
//   const [data, setData] = useState([]);
//   const [_isLoading, setIsLoading] = useState<boolean>(false);
//   const auth = useRecoilValue(authAtom);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     setIsLoading(true);
//     try {
//       if (auth?.user?.id) {
//         const res = await getBookings(auth?.user?.id);
//         if (res?.status === 200) {
//           setData(res?.data);
//         }
//       }
//       setIsLoading(false);
//     } catch (error: any) {
//       setIsLoading(false);
//     }
//   };

// const delSlots = async () => {
//   setIsLoading(true);
//   try {
//     const res = await deleteSlot();
//     if (res?.status === 200) {
//       alert("deleted");
//     }

//     setIsLoading(false);
//   } catch (error: any) {
//     setIsLoading(false);
//   }
// };

// const scheduleSlots = async () => {
//   setIsLoading(true);
//   try {
//     const res = await addSlot();
//     if (res?.status === 200) {
//       alert("deleted");
//     }

//     setIsLoading(false);
//   } catch (error: any) {
//     setIsLoading(false);
//   }
// };

//   return (
//     <div>
// <div className="flex justify-between gap-4">
//   <Button
//     label="Add Slots"
//     onClick={scheduleSlots}
//     className="border-none rounded-none bg-green-600 cursor-pointer"
//   />
//   <Button
//     label="Delete Slots"
//     onClick={delSlots}
//     className="border-none rounded-none bg-green-600 cursor-pointer"
//   />
// </div>
//       <div className="mt -10 bg-green-200">
//         {data.length > 0 &&
//           data.map((ele: any) => (
//             <div className="flex  justify-center gap-4 w-full p-4  my-4">
//               <p>{ele?.date}</p>
//               <p>{ele?.startTime}</p>
//               <p>{ele?.endTime}</p>
//               <p>{ele?.sport}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default React.memo(Bookings);

import React, { ChangeEvent, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Table from "../../../libraries/table";
import BookingRow from "./BookingRow";
import Button from "../../../components/Button";
import {
  addSlot,
  deleteAllEntities,
  deleteSlots,
  getBookingsAndUserAndTransaction,
  getBookingsAndUserAndTransactionBymobile,
} from "../../../services/adminApiServices/bookingApiService";
import { FormProvider, useForm } from "react-hook-form";
import { useDebounce } from "../../../custom-hooks/hooks";
import RHFTextField from "../../../libraries/form-fields/RHFTextField";

const headers: string[] = [
  "User",
  "Mobile",
  "Amount paid",
  "Payment id",
  "Date",
  "Hours",
  "Start time",
  "End time",
  "Sport",
];

const Bookings = () => {
  const methods = useForm();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(100);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(5);
  const [search, setSearch] = useState<number | null>(null);
  const debounceSearch = useDebounce(search, 1000);

  useEffect(() => {
    if (debounceSearch === null) {
      fetchBookingsAndTransactions();
    }
  }, [page, size, debounceSearch]);

  useEffect(() => {
    if (debounceSearch != null) {
      fetchBookingsAndTransactionsByMobile(debounceSearch);
    }
  }, [debounceSearch]);

  const fetchBookingsAndTransactionsByMobile = async (mobile: number) => {
    try {
      setIsLoading(true);
      const res = await getBookingsAndUserAndTransactionBymobile(mobile);
      if (res?.status === 200) {
        setCount(res?.data?.count);
        setData(res?.data?.bookings);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    val ? setSearch(parseInt(e.target.value)) : setSearch(null);
  };

  const fetchBookingsAndTransactions = async () => {
    try {
      setIsLoading(true);
      const res = await getBookingsAndUserAndTransaction();
      if (res?.status === 200) {
        setCount(res?.data?.count);
        setData(res?.data?.bookings);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const delAll = async () => {
    try {
      setIsLoading(true);
      const res = await deleteAllEntities();

      if (res?.status === 200) {
        alert("deleted");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const delSlots = async () => {
    setIsLoading(true);
    try {
      const res = await deleteSlots();
      if (res?.status === 200) {
        alert("deleted");
      }

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  const scheduleSlots = async () => {
    setIsLoading(true);
    try {
      const res = await addSlot();
      if (res?.status === 200) {
        alert("Added");
      }

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  return (
    <Layout isLoading={isLoading}>
      <div className="flex flex-col justify-center p-10">
        <div className="flex justify-between gap-4">
          <Button
            label="Delete All"
            onClick={delAll}
            className="border-none rounded-none bg-green-600 cursor-pointer"
          />
          <Button
            label="Add Slots"
            onClick={scheduleSlots}
            className="border-none rounded-none bg-green-600 cursor-pointer"
          />
          <Button
            label="Delete Slots"
            onClick={delSlots}
            className="border-none rounded-none bg-green-600 cursor-pointer"
          />
        </div>
        <div className="mt-10">
          <FormProvider {...methods}>
            <RHFTextField
              name="mobile"
              placeholder="search by mobile"
              onChange={handleSearch}
            />
          </FormProvider>
        </div>
        <div className="w-full shadow ">
          <Table
            headers={headers}
            tableData={data}
            TableRow={BookingRow}
            paginationOptions={{ count, page, size, setPage, setSize }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(Bookings);
