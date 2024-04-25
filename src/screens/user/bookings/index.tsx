import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../recoil/authAtom";
import {
  addSlot,
  deleteSlot,
  getBookings,
} from "../../../services/bookingApiService";
import Button from "../../../components/Button";

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

  const delSlots = async () => {
    setIsLoading(true);
    try {
      const res = await deleteSlot();
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
        alert("deleted");
      }

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between gap-4">
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
      <div className="mt -10 bg-green-200">
        {data.length > 0 &&
          data.map((ele: any) => (
            <div className="flex  justify-center gap-4 w-full p-4  my-4">
              <p>{ele?.date}</p>
              <p>{ele?.startTime}</p>
              <p>{ele?.endTime}</p>
              <p>{ele?.sport}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Bookings);
