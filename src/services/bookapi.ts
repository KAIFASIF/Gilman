import axios from "axios";
import api from "../config/api";

export const createSlot = (data: any) => {
  return api.post(`/book-slot`, data);
};

export const saveTransaction = (data: any) => {
  alert("dddddddddddd")
  return api.post(`/transaction`, data);
};

export const fetchSlots = (date: string) => {
  return axios.get(`http://localhost:9000/api/v1/user/slots?date=${date}`);
};

export const payAmount = () => {
  return axios.get(`http://localhost:9000/payment`);
};
