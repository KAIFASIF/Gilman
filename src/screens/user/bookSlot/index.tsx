import React, { useState } from "react";
import {
  calculateEndTime,
  isUserLoggedin,
  razorPayOptionsPayload,
} from "./utils";

import { authAtom } from "../../../recoil/authAtom";
import { useRecoilValue } from "recoil";

import {
  changeDateFormat,
  convertTo24Hour,
  handleToastMessage,
  isValidTime24,
} from "../../../utilities/utils";
import Layout from "../../../components/Layout";
import Modal from "../../../components/Modal";
import Signin from "../../signin";
import Toast from "../../../components/taost";

import {
  createBookingAndSaveTransaction,
  validateBookingAndCreateOrder,
} from "../../../services/userApiServices/bookingApiService.ts";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import BookingForm from "./BookingForm";

const BookSlot = () => {
  const auth = useRecoilValue(authAtom);
  const [duration, setDuration] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const [Razorpay] = useRazorpay();

  const handleToast = () => setOpen(false);

  const validateUserAndTime = (endTime: string) => {
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
  };

  const constructPayload = (endTime: String, data: any) => {
    return {
      ...data,
      endTime,
      startTime: convertTo24Hour(data?.startTime),
      date: changeDateFormat(data?.date),
    };
  };

  const handleTransaction = async (
    razorPayresponse: any,
    orderResponse: any,
    bookingPayload: any
  ) => {
    setIsLoading(true);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      razorPayresponse;
    try {
      if (auth?.user?.id) {
        const payload = {
          booking: { ...bookingPayload },
          transaction: {
            amountPaid: orderResponse?.amount,
            bookingAmount: orderResponse?.amount,
            razorPayOrdertId: razorpay_order_id,
            razorPayPaymemntId: razorpay_payment_id,
            razorPaySignature: razorpay_signature,
          },
        };
        const res = await createBookingAndSaveTransaction(
          auth?.user?.id,
          payload
        );

        if (res?.status === 201) {
          handleToastMessage(
            setMessage,
            setSeverity,
            setOpen,
            "Slot booked sucessfully",
            "success",
            true
          );
        }
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

  const handlePayments = (orderResponse: any, bookingPayload: any) => {
    try {
      const options: RazorpayOptions = {
        ...razorPayOptionsPayload,
        order_id: orderResponse?.id,
        handler: (res: any) => {
          handleTransaction(res, orderResponse, bookingPayload);
        },
      };
      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error: any) {
      setIsLoading(false);
      handleToastMessage(
        setMessage,
        setSeverity,
        setOpen,
        error?.response?.data,
        "error",
        true
      );
    }
  };

  const handleSubmit = async (data: any) => {
    const endTime = calculateEndTime(data?.startTime, duration);
    validateUserAndTime(endTime);
    try {
      setIsLoading(true);
      const payload = constructPayload(endTime, data);
      const res = await validateBookingAndCreateOrder(700, payload);
      if (res?.status === 201) {
        handlePayments(res?.data, payload);
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
      <div>
        <BookingForm
          handleSubmit={handleSubmit}
          duration={duration}
          setDuration={setDuration}
        />
      </div>
    </Layout>
  );
};

export default React.memo(BookSlot);
