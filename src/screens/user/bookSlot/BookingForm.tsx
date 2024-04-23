import React from "react";
import RHFTextField from "../../../libraries/form-fields/RHFTextField";
import RHFSelectField from "../../../libraries/form-fields/RHFSelectField";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import { sportsOption, timeOptions } from "./utils";
import { todaysDate } from "../../../utilities/utils";

const BookingForm = ({ handleSubmit, duration, setDuration }: any) => {
  const methods = useForm();

  const handleDuration = (val: string) => {
    val === "plus"
      ? setDuration((prev: number) => prev + 0.5)
      : setDuration((prev: number) => prev - 0.5);
  };

  const onSubmit = (data: any) => {
    handleSubmit(data);
  };
  return (
    <div className="bg-white p-2 lg:p-8 h-screen">
      <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2  p-2 md:p-8 ">
        <div className="flex justify-center items-center w-full bg-gray-100 rounded p-4">
          <FormProvider {...methods}>
            <div className="w-full space-y-4">
              <div className="w-full flex justify-between items-center">
                <p className="text-lg mt-4">Sport</p>
                <div className="w-[70%]">
                  <RHFSelectField
                    name="sport"
                    options={sportsOption}
                    required
                    defaultValue="boxCricket"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-lg mt-4">Date</p>
                <div className="w-[70%]">
                  <RHFTextField
                    name="date"
                    type="date"
                    inputProps={{
                      min: todaysDate(),
                    }}
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-lg mt-4">Start time</p>
                <div className="w-[70%]">
                  <RHFSelectField
                    name="startTime"
                    options={timeOptions}
                    required
                    className="w-full bg-red-4000"
                    defaultValue="06:00 am"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-lg mt-4">Duration</p>
                <div className="w-[70%]">
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
                </div>
              </div>

              <div className="w-full mt-4">
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
      </div>
    </div>
  );
};

export default React.memo(BookingForm);
