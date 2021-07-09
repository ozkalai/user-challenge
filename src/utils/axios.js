import axios from "axios";

export const setAxiosHeaders = () => {
  axios.defaults.headers = {
    "app-id": "60e80f3f05382821488dd1f4",
  };
  axios.defaults.baseURL = "https://dummyapi.io/data/api";
};
