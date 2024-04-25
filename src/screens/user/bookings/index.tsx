import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../../recoil/authAtom";
import { addSlot, deleteSlot, getBookings } from "../../../services/bookingApiService";
import Button from "../../../components/Button";

const Bookings = () => {
  const [_data, setData] = useState([]);
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
          alert("deleted")
        }
      
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  }

  const scheduleSlots = async () => {
    setIsLoading(true);
    try {     
        const res = await addSlot();
        if (res?.status === 200) {
          alert("deleted")
        }
      
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  }

  return <div><div className="">
  
  <Button
    label="Add Slots"
    onClick={scheduleSlots}
    className="border-none rounded-none bg-green-600"
  />
  <Button
    label="Delete Slots"
    onClick={delSlots}
    className="border-none rounded-none bg-green-600"
  />
</div></div>;
};

export default React.memo(Bookings);
