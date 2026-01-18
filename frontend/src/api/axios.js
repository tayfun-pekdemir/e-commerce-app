import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.Authorization = token;
  } else {
    delete axiosInstance.defaults.headers.Authorization;
  }
};

export default axiosInstance;