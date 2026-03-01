import axiosInstance from "./axios";

export const orderAPI = (data) => {
   return axiosInstance.post("/order", data);
};

export const previousOrdersAPI = () => {
   return axiosInstance.get("/order")
};