import axiosInstance from "./axios";

export const getRoles = () => {
  return axiosInstance.get("/roles");
};

export const signup = (formData) => {
  return axiosInstance.post("/signup", formData);
};
