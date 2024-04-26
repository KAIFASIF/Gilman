import axios from "axios";

export const getBookingsAndUser = () => {
  return axios.get(`http://52.78.206.35:9000/api/v1/admin/bookings`);
  // return axios.get(`http://localhost:9000/api/v1/admin/bookings`);
};

export const addSlot = () => {
  return axios.get(`http://52.78.206.35:9000/api/v1/admin/addScheduleBookings`);
  // return axios.get(`http://localhost:9000/api/v1/admin/addScheduleBookings`);
};

export const deleteSlot = () => {
  return axios.get(`http://52.78.206.35:9000/api/v1/admin/reset`);
  // return axios.get(`http://localhost:9000/api/v1/admin/reset`);
};

export const deleteAllEntities = () => {
  return axios.get(`http://52.78.206.35:9000/api/v1/admin/del`);
  // return axios.get(`http://localhost:9000/api/v1/admin/del`);
};
