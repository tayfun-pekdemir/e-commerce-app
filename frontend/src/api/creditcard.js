import axiosInstance from "./axios";

export const getCreditCardAPI = () => {
  return axiosInstance.get("/user/card");
};

export const addCreditCardAPI = (data) => {
  return axiosInstance.post("/user/card", data);
};

export const updateCreditCardAPI = (data) => {
  return axiosInstance.put("/user/card", data);
};

export const deleteCreditCardAPI = (id) => {
  return axiosInstance.delete(`/user/card/${id}`);
};
