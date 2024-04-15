import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { FormProvider, useForm } from "react-hook-form";
import RHFTextField from "../../../libraries/form-fields/RHFTextField";
import RHFSelectField from "../../../libraries/form-fields/RHFSelectField";
import {
  calculateEndTime,
  changeDateFormat,
  convertTo24Hour,
  sportsOption,
  timeOptions,
} from "./utils";
import Button from "../../../components/Button";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import { authAtom } from "../../../recoil/authAtom";
import { useRecoilState } from "recoil";
import axios from "axios";

const Book = ({ setIsLoading, setIsModalOpen }: any) => {
  const methods = useForm();
  const [auth, setAuth] = useRecoilState(authAtom);
  const [duration, setDuration] = useState<number>(0);

  // setAuth("")

  const handleDuration = (val: string) => {
    val === "plus"
      ? setDuration((prev: number) => prev + 0.5)
      : setDuration((prev: number) => prev - 0.5);
  };

  const isUser = (val: string) => {
    val === "plus"
      ? setDuration((prev: number) => prev + 0.5)
      : setDuration((prev: number) => prev - 0.5);
  };

  const isUserLoggedin = () => {
    if (!auth?.isLoggedin) {
      setIsModalOpen(true);
      return false;
    }

    return true;
  };

  const onSubmit = async (data: any) => {
    try {
      if (!isUserLoggedin()) return;
      setIsLoading(true);
      const updatedData = {
        ...data,
        startTime: convertTo24Hour(data?.startTime),
        endTime: calculateEndTime(data?.startTime, duration),
        name: auth?.user?.name,
        mobile: auth?.user?.mobile,
        isPlayed: false,
        date: changeDateFormat(data?.date),
      };

 
      console.log(updatedData);

      const res = await axios.post("http://localhost:9000/api/v1/test", updatedData);
      if (res?.status === 201) {
        // localStorage.setItem("token", JSON.stringify(res?.data?.token));
        alert()
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // if()
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 rounded p-4">
      <FormProvider {...methods}>
        <div className="w-full space-y-4">
          <div className=" w-full">
            <RHFSelectField
              name="sports"
              // label="Sports"
              options={sportsOption}
              required
            />
          </div>
          <div className=" w-full">
            <RHFTextField
              name="date"
              type="date"
              // shrinkLabel="Date"
              // InputLabelProps={{ shrink: true }}
              required
            />
          </div>
          <div className="w-full  gap-4">
            {/* <span>Start time</span> */}
            {/* <div className="w-full bg-blue-400 flex gap-4"> */}
            <RHFSelectField
              name="startTime"
              // label="Start time"
              options={timeOptions}
              required
              className="w-full bg-red-4000"
            />
            {/* </div> */}
          </div>
          <div className=" w-full flex justify-between mt-10">
            <LuMinusCircle
              onClick={() => handleDuration("minus")}
              size={20}
              className={`text-red-800 hover:text-gray-400  cursor-pointer
                ${duration === 0 && "invisible"}`}
            />
            <span className="text-lg font-semibold text-gray-700">
              {duration}
            </span>
            <FiPlusCircle
              onClick={() => handleDuration("plus")}
              size={20}
              className={`text-green-800 hover:text-gray-400 cursor-pointer
                ${duration === 17 && "invisible"}`}
            />
          </div>
          <div className="w-full">
            <Button
              onClick={methods.handleSubmit(onSubmit)}
              label="Submit"
              className={`${
                duration === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-800"
              }`}
              disabled={duration === 0 ? true : false}
            />
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default React.memo(Book);
