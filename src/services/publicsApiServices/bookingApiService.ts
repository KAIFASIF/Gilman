import axios from "axios";

export const fetchSlots = (date: string) => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/public/slots?date=${date}`);
};
