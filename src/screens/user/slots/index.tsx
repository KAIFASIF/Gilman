import React, { useEffect, useState } from "react";
import axios from "axios";

import FilterSearch from "./FilterSearch";
import { renderBookedSlots } from "./utils";
import { todaysDate } from "../../../utilities/utils";
import Layout from "../../../components/Layout";
import { useLocation } from "react-router-dom";

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
      const res = await axios.get(
        `http://localhost:9000/api/v1/ground?date=${date}`
      );
      if (res?.status === 200) {
        setData(renderBookedSlots(res?.data));
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  return (
    <Layout isLoading={isLoading}>
      <div className="flex justify-center ">
        <div className="flex flex-col w-[80%] py-10">
          <div className="w-full">
            <FilterSearch
              fetchBookedSlots={fetchBookedSlots}
              urlDate={urlDate}
            />
          </div>
          <div className="bg-gray-100 grid grid-cols-8 gap-4 w-full p-10 shadow-xl">
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
