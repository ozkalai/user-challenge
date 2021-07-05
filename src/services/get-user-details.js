import axios from "axios";

export const getUserDetails = async (id) => {
  return axios.get(`/user/${id}`);
};
