import axios from "axios";

export const setAxiosHeaders = () => {
  axios.defaults.headers = {
    "app-id": "60e764a9a169364c9601b11e",
  };
  axios.defaults.baseURL = "https://dummyapi.io/data/api";
};
