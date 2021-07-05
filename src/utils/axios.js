import axios from "axios";

export const setAxiosHeaders = () => {
  axios.defaults.headers = {
    "app-id": "60e2b04b8523f244995641c0",
  };
  axios.defaults.baseURL = "https://dummyapi.io/data/api";
};
