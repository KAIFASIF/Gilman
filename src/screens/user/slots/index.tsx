import React, { useEffect, useState } from "react";

import FilterSearch from "./FilterSearch";
import { renderBookedSlots } from "./utils";
import { todaysDate } from "../../../utilities/utils";
import Layout from "../../../components/Layout";
import { useLocation } from "react-router-dom";
import { fetchSlots } from "../../../services/bookingApiService.ts";
import { timeSlots } from "./data";

const Slots = () => {
  const urlDate = new URLSearchParams(useLocation().search).get("date");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchBookedSlots(urlDate ? urlDate : todaysDate());
  }, []);

  const fetchBookedSlots = async (date: string) => {
    setIsLoading(true);
    try {
      if (!date) return;
      const res = await fetchSlots(date);
      if (res?.status === 200) {
        setData(renderBookedSlots(res?.data));
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setData(timeSlots);
    }
  };

  return (
    <Layout isLoading={isLoading}>
      <div className="flex justify-center ">
        <div className="flex flex-col w-[90%] md:w-[80%] h-full">
          <div className="w-full">
            <FilterSearch
              fetchBookedSlots={fetchBookedSlots}
              urlDate={urlDate}
            />
          </div>
          <div className="bg-gray-100 grid grid-cols-3 lg:grid-cols-8 gap-4 w-full p-4 lg:p-10 shadow  rounded overflow-auto h-[90vh]">
            {data.length > 0 &&
              data.map((ele: any, index: number) => (
                <div
                  className={`${
                    ele?.isBooked ? "bg-gray-400" : "bg-white"
                  } rounded w-full flex justify-center items-center  h-20 text-lg`}
                  key={index}
                >
                  {ele?.time}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(Slots);
