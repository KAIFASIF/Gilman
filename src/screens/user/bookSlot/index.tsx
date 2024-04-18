import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RHFTextField from "../../../libraries/form-fields/RHFTextField";
import RHFSelectField from "../../../libraries/form-fields/RHFSelectField";
import {
  calculateEndTime,
  isUserLoggedin,
  sportsOption,
  timeOptions,
} from "./utils";
import Button from "../../../components/Button";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import { authAtom } from "../../../recoil/authAtom";
import { useRecoilValue } from "recoil";
import axios from "axios";
import {
  changeDateFormat,
  convertTo24Hour,
  handleToastMessage,
  isValidTime24,
  todaysDate,
} from "../../../utilities/utils";
import Layout from "../../../components/Layout";
import Modal from "../../../components/Modal";
import Signin from "../../signin";
import Toast from "../../../components/taost";
import { useNavigate } from "react-router-dom";
import { createSlot, saveTransaction } from "../../../services/bookapi";
import Payment from "./Payment";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

const BookSlot = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);
  const [duration, setDuration] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error">("success");
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [Razorpay] = useRazorpay();

  const handleClearTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  useEffect(() => {
    return () => {
      handleClearTimeout();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleToast = () => setOpen(false);

  const handleDuration = (val: string) => {
    val === "plus"
      ? setDuration((prev: number) => prev + 0.5)
      : setDuration((prev: number) => prev - 0.5);
  };

  const onSubmit = async (data: any) => {
    const endTime = calculateEndTime(data?.startTime, duration);
    try {
      if (!isUserLoggedin(auth, setIsModalOpen)) return;
      if (!isValidTime24(endTime)) {
        handleToastMessage(
          setMessage,
          setSeverity,
          setOpen,
          "Cannot book ground for between 11:00 pm - 06:00 am",
          "error",
          true
        );

        return;
      }

      setIsLoading(true);
      const updatedData = {
        ...data,
        amount:700,
        endTime,
        name: auth?.user?.name,
        mobile: auth?.user?.mobile,
        isPlayed: false,
        startTime: convertTo24Hour(data?.startTime),
        date: changeDateFormat(data?.date),
      };

      // const token =  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhc2lmMjYiLCJpYXQiOjE3MTMzNzM0NTQsImV4cCI6MTcxMzQ1OTg1NH0.Es3DRGD5ppKi6CbtX9aK0GO3WAJTjICIUn4HP5mz9E1L1JzOWnl3lFurIolZeq_y"
      // const res = await axios.post(
      //   "http://localhost:9000/api/v1/user/book-slot",
      //   updatedData,
      //   {
      //     headers: {
      //         Authorization: `Bearer ${token}`,
      //     },
      // }
      // );
      const res = await createSlot(updatedData);
      if (res?.status === 201) {
        // handleToastMessage(
        //   setMessage,
        //   setSeverity,
        //   setOpen,
        //   "Slot booked sucessfully",
        //   "success",
        //   true
        // );

        // const id = setTimeout(() => {
        //   navigate(`/slots?date=${data?.date}`);
        // }, 2000);

        // setTimeoutId(id);

        

        handlePayments(res?.data,updatedData )
      //   const id = setTimeout(() => {
      //     navigate(`/slots?date=${data?.date}`);
      //   }, 2000);

      //   setTimeoutId(id);
      // }

      }

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      if (error?.response?.status === 502) {
        handleToastMessage(
          setMessage,
          setSeverity,
          setOpen,
          error?.response?.data,
          "error",
          true
        );
      }
    }
  };


  const createTranscation =async (data:any)=>{
    try {
      console.log("sdsdsdssd: ", data)
      const res = await saveTransaction(data)
    } catch (error:any) {
      
    }
  }

  const handlePayments =async (data:any, newData:any) => {
    const { id, amount}= data
    try {
        const options: RazorpayOptions = {
            key: "rzp_test_gSK9TTIhMBYv7S",
          amount: "500",
          currency: "INR",
          name: "Gilman sprtts",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: id,
          handler: (res) => {
            createTranscation({...res, ...newData})
            console.log(res);
          },
          prefill: {
            name: "Kaif",
            email: "a@example.com",
            contact: "9700174021",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzpay = new Razorpay(options);
        rzpay.open();
        
        
    } catch (error:any) {
        alert("paymant failedsss")
        
    }
  }

  return (
    <Layout isLoading={isLoading}>
      <div>
        <Toast
          message={message}
          open={open}
          severity={severity}
          handleClose={handleToast}
        />
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          ModalClass="w-[40%] max-h-[60vh]"
        >
          <Signin setIsModalOpen={setIsModalOpen} />
        </Modal>
      </div>

      <div className="bg-white p-10 h-screen">
        <div className="bg-gray-200 grid grid-cols-2  mt-10 p-10">
          <div className="flex justify-center items-center w-full bg-gray-100 rounded p-4">
            <FormProvider {...methods}>
              <div className="w-full space-y-4">
                <div className="w-full flex justify-between items-center">
                  <p className="text-lg mt-4">Sport</p>
                  <div className="w-[70%]">
                    <RHFSelectField
                      name="sports"
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
    </Layout>
  );
};

export default React.memo(BookSlot);
