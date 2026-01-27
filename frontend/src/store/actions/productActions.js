export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTLIST = "SET_PRODUCTLIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_FETCHSTATE = "SET_FETCHSTATE";
import { getCategories, getProducts } from "../../api/product";

export const setCategories = ( categories ) => {
    return { type: SET_CATEGORIES, payload: categories };
};

export const setProductList = ( productList ) => {
    return { type: SET_PRODUCTLIST, payload: productList };
};

export const setTotal = ( total ) => {
    return { type: SET_TOTAL, payload: total };
};

export const setLimit = ( limit ) => {
    return { type: SET_LIMIT, payload: limit };
};

export const setOffset = ( offset ) => {
    return { type: SET_OFFSET, payload: offset };
};

export const setFilter = ( filter ) => {
    return { type: SET_FILTER, payload:filter };
};

export const setFetchState = ( fetchState ) => {
    return { type: SET_FETCHSTATE, payload:fetchState };
};

export const fetchCategories = () => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));

  try {
    const res = await getCategories();
    dispatch(setCategories(res.data));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
  }
};

export const fetchProducts = ({ category, filter, sort }={}) => async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
        const res = await getProducts({
            category,
            filter,
            sort
        });

        dispatch(setProductList(res.data.products));
        dispatch(setTotal(res.data.total));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        dispatch(setFetchState("FAILED"));
    }
};
