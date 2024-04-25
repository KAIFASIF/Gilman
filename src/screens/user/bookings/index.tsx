import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../recoil/authAtom";
import { getBookings } from "../../../services/bookingApiService";

const Bookings = () => {
  const [data, setData] = useState([]);
  const [_isLoading, setIsLoading] = useState<boolean>(false);
  const auth = useRecoilValue(authAtom);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      if (auth?.user?.id) {
        const res = await getBookings(auth?.user?.id);
        if (res?.status === 200) {
          setData(res?.data);
        }
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };
  return <div>Bookings</div>;
};

export default React.memo(Bookings);
