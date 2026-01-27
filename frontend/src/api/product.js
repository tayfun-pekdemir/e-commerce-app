import axiosInstance from "./axios";

export const getCategories = () => {
    return axiosInstance.get("/categories");
}

export const getProducts = ({ category, filter, sort }) => {
    return axiosInstance.get("/products", {
        params: {
            category,          
            ...(filter && { filter }),
            ...(sort && { sort })
        }
    });
}
