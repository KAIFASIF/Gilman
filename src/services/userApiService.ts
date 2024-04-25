import axios from "axios";

export const signupUser = (data: any) => {
  return axios.post(`http://ec2-43-202-42-35.ap-northeast-2.compute.amazonaws.com:9000/api/v1/user/signup`, data);
  // return axios.post(`http://localhost:9000/api/v1/user/signup`, data);
};

export const signinUser = (data: any) => {
  return axios.post(`http://ec2-43-202-42-35.ap-northeast-2.compute.amazonaws.com:9000/api/v1/user/signin`, data);
  // return axios.post(`http://localhost:9000/api/v1/user/signin`, data);
};

