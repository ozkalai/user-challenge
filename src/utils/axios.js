import axios from "axios";

export const setAxiosHeaders = () => {
  axios.defaults.headers = {
    "app-id": "60e83c77691b8b6ccbc8e8f4",
  };
  axios.defaults.baseURL = "https://dummyapi.io/data/api";
};
