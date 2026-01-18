import axiosInstance from "./axios";

export const getRoles = () => {
  return axiosInstance.get("/roles");
};

export const signup = (formData) => {
  return axiosInstance.post("/signup", formData);
};

export const login = (formData) => {
  return axiosInstance.post("/login", formData);
};

export const verify = () => {
  return axiosInstance.get("/verify");
}