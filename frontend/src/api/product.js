import axiosInstance from "./axios";

export const getCategories = () => {
    return axiosInstance.get("/categories");
}

export const getProducts = ({ category, filter, sort, limit, offset }) => {
    return axiosInstance.get("/products", {
        params: {
            category,          
            ...(filter && { filter }),
            ...(sort && { sort }),
            ...(limit != null && { limit }),
            ...(offset != null && { offset }), 
        }
    });
}

export const getProductById = (productId) => {
    return axiosInstance.get(`/products/${productId}`);
}

