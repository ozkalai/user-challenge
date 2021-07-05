import axios from "axios";

export const getUsers = async (page) => {
  return axios.get(`/user?page=${page ?? 1}&limit=15`);
};
