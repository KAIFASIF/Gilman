import api from "../../config/api";

export const getBookingsAndUserAndTransaction = () => {
  return api.get(`/admin/bookings`);
};

export const getBookingsAndUserAndTransactionBymobile = (mobile: number) => {
  return api.get(`/admin/bookings/${mobile}`);
};

export const addSlot = () => {
  return api.get(`/admin/addScheduleBookings`);
};

export const deleteSlots = () => {
  return api.get(`/admin/deleteSlots`);
};

export const deleteAllEntities = () => {
  return api.get(`/admin/deleteAll`);
};
