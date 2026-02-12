import axiosInstance from "./axios";

export const getAddressesAPI = () => {
  return axiosInstance.get("/user/address");
};

export const addAddressAPI = (data) => {
  return axiosInstance.post("/user/address", data);
};

export const updateAddressAPI = (data) => {
  return axiosInstance.put("/user/address", data);
};

export const deleteAddressAPI = (id) => {
  return axiosInstance.delete(`/user/address/${id}`);
};
