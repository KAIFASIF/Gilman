
import api from "../../config/api";

export const validateBookingAndCreateOrder = (amount: number, data: any) => {
  return api.post(`/user/validate-booking-and-create-order/${amount}`, data);
};

export const createBookingAndSaveTransaction = (id: any, data: any) => {
  return api.post(`/user/creating-boooking-and-save-transaction/${id}`, data);
};

export const resetBookedSlot = (data: any) => {
  return api.post(`/user/resetSlot`, data);
};

export const getBookings = (id: number) => {
  return api.get(`/user/bookings/${id}`);
};

