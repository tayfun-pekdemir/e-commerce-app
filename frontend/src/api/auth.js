import axiosInstance from "./axios";

export const getRolesAPI = () => {
  return axiosInstance.get("/roles");
};

export const signupAPI = (formData) => {
  return axiosInstance.post("/signup", formData);
};

export const loginAPI = (formData) => {
  return axiosInstance.post("/login", formData);
};

export const verifyAPI = () => {
  return axiosInstance.get("/verify");
}