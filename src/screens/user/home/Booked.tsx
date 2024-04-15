import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertTo24Hour, timeSlots } from "./utils";

const Booked = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const validateTimings = (resData: any) => {
    const updatedData = timeSlots.map((ele: any) => {
      resData.forEach((item1: any) => {
        const { starttime, endtime } = item1;
        const { time } = ele;
        const [startHour, startMinute] = starttime.split(":").map(Number);
        const [endHour, endMinute] = endtime.split(":").map(Number);
        const [hour, minute, modifier] = time.split(/\s|:/);
        const convertedTime = convertTo24Hour(time);
        const [convertedHour, convertedMinute] = convertedTime
          .split(":")
          .map(Number);
        const totalMinutes = convertedHour * 60 + convertedMinute;
        const startTotalMinutes = startHour * 60 + startMinute;
        const endTotalMinutes = endHour * 60 + endMinute;
        if (
          totalMinutes >= startTotalMinutes &&
          totalMinutes <= endTotalMinutes
        ) {
          ele.istrue = true;
        }
      });
      return ele;
    });
    setData(updatedData);
  };

  const fetch = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/v1/ground?date=2024-04-15"
      );
      console.log(res?.data);
      setData(res?.data);
      validateTimings(res?.data);
    } catch (error) {}
  };

  return (
    <div className="bg-red-400 flex justify-center items-center ">
      <div className="bg-green-100  mt-40  p-4 grid grid-cols-8 gap-4 w-1/2 ">
        {data.length > 0 &&
          data.map((ele: any, index: number) => (
            <div
              className="round w-full flex justify-center items-center"
              key={index}
            >
              <p
                className={`${
                  ele?.istrue ? "bg-gray-400" : "bg-white"
                } p-2  rounded`}
              >
                {ele?.time}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Booked);
