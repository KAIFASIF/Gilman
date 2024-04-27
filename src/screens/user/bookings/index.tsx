import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Table from "../../../libraries/table";
import BookingRow from "./BookingRow";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../recoil/authAtom";
import { getBookings } from "../../../services/userApiServices/bookingApiService";

const headers: string[] = [
  "Date",
  "Start time",
  "End time",
  "Sport",
];

const Bookings = () => {
  const auth = useRecoilValue(authAtom);
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(100);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(5);

  useEffect(() => {
    fetchBookings();
  }, [page, size]);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      if (auth?.user?.id) {
        const res = await getBookings(auth?.user?.id);
        if (res?.status === 200) {
          setCount(res?.data?.count);
          setData(res?.data?.booking);
        }
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Layout isLoading={isLoading}>
      <div className="flex flex-col justify-center p-10">
        {data.length > 0 && (
          <div className="px-4 pt-5  lg:px-10 py-10 w-full shadow mt-10">
            <Table
              headers={headers}
              tableData={data}
              TableRow={BookingRow}
              paginationOptions={{ count, page, size, setPage, setSize }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default React.memo(Bookings);
