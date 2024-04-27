import axios from "axios";

export const getBookingsAndUser = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/admin/bookings`);
};

export const addSlot = () => {
  return axios.get(
    `${import.meta.env.VITE_BASE_URL}/admin/addScheduleBookings`
  );
};

export const deleteSlot = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/admin/reset`);
};

export const deleteAllEntities = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/admin/del`);
};
