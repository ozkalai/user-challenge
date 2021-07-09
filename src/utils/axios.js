import axios from "axios";

export const setAxiosHeaders = () => {
  axios.defaults.headers = {
    "app-id": "60e8394f2f3ecb24b3a9bc8e",
  };
  axios.defaults.baseURL = "https://dummyapi.io/data/api";
};
