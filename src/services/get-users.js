import axios from "axios";

export const getUsers = async (page) => {
  return axios.get(`/user?page=${page}&limit=15`);
};
