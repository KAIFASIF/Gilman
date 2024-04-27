import axios from "axios";

export const signupUser = (data: any) => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, data);
};

export const signinUser = (data: any) => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/user/signin`, data);
};
