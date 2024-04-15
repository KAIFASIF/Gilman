import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertTo24Hour, timeSlots } from "./utils";
import Booked from "./Booked";
import Book from "./Book";
import Modal from "../../../components/Modal";
import Signin from "../../signin";
import Navbar from "../../../components/Navbar";
import Layout from "../../../components/Layout";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
    <Layout isLoading={isLoading}>
      <div className="bg-red-400 p-10">
        <div className="w-full bg-white">
          <Navbar setIsModalOpen={setIsModalOpen} />
        </div>
        <div className="bg-gray-200 grid grid-cols-2  mt-10 p-10">
          {/* <Booked setIsLoading={setIsLoading} /> */}
          <Book />
          {/* <Book setIsLoading={setIsLoading} setIsModalOpen={setIsModalOpen} /> */}
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            ModalClass="w-[40%] max-h-[60vh]"
          >
            <Signin setIsModalOpen={setIsModalOpen} />
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(Home);
