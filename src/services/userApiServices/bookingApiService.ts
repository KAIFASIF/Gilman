import axios from "axios";
import api from "../../config/api";

export const validateBookingAndCreateOrder = (amount: number, data: any) => {
  return api.post(`/user/validate-booking-and-create-order/${amount}`, data);
};

export const createBookingAndSaveTransaction = (id: any, data: any) => {
  return api.post(`/user/creating-boooking-and-save-transaction/${id}`, data);
};

export const getBookings = (id: number) => {
  return api.get(`/user/bookings/${id}`);
};

export const fetchSlots = (date: string) => {
  return axios.get(`http://52.78.206.35:9000/api/v1/user/slots?date=${date}`);
  // return axios.get(`http://localhost:9000/api/v1/user/slots?date=${date}`);
};
