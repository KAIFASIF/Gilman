import axios from "axios";

export const signupUser = (data: any) => {
  return axios.post(`http://localhost:9000/api/v1/user/signup`, data);
};

export const signinUser = (data: any) => {
  return axios.post(`http://localhost:9000/api/v1/user/signin`, data);
};

