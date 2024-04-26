import api from "../../config/api";

export const getBookingsAndUser = () => {
  return api.get(`http://localhost:9000/api/v1/admin/bookings`);
  // return api.get(`http://localhost:9000/api/v1/admin/bookings`);
};

export const addSlot = () => {
  // return api.get(`http://3.36.54.14:9000/api/v1/admin/addScheduleBookings`);
  return api.get(`http://localhost:9000/api/v1/admin/addScheduleBookings`);
};

export const deleteSlot = () => {
  return api.get(`http://3.36.54.14:9000/api/v1/admin/reset`);
  // return api.get(`http://localhost:9000/api/v1/admin/reset`);
};

