import axios from "axios";
import api from "../config/api";

export const validateBookingAndCreateOrder = (amount: number, data: any) => {
  return api.post(`/validate-booking-and-create-order/${amount}`, data);
};

export const createBookingAndSaveTransaction = (id: any, data: any) => {
  return api.post(`/creating-boooking-and-save-transaction/${id}`, data);
};

export const getBookings = (id: number) => {
  return api.get(`/bookings/${id}`);
};

export const addSlot = () => {
  return api.get(`http://3.36.54.14:9000/api/v1/user/addScheduleBookings`);
  // return api.get(`http://localhost:9000/api/v1/user/addScheduleBookings`);
};

export const deleteSlot = () => {
  return api.get(`http://3.36.54.14:9000/api/v1/user/reset`);
  // return api.get(`http://localhost:9000/api/v1/user/reset`);
};

export const fetchSlots = (date: string) => {
  return axios.get(`http://3.36.54.14:9000/api/v1/user/slots?date=${date}`);
  // return axios.get(`http://localhost:9000/api/v1/user/slots?date=${date}`);
};
