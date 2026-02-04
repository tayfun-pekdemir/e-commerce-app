export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTLIST = "SET_PRODUCTLIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_FETCHSTATE = "SET_FETCHSTATE";
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
export const SET_BEST_SELLERS = "SET_BEST_SELLERS";
export const SET_CATEGORY_BEST_SELLERS = "SET_CATEGORY_BEST_SELLERS";
import { getCategories, getProducts, getProductById } from "../../api/product";

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

export const setCurrentProduct = ( currentProduct ) => {
    return { type: SET_CURRENT_PRODUCT, payload:currentProduct };
};

export const setBestSellers = ( bestSellers ) => {
    return { type: SET_BEST_SELLERS, payload:bestSellers };
};

export const setCategoryBestSellers = ( categoryBestSellers ) => {
    return { type: SET_CATEGORY_BEST_SELLERS, payload:categoryBestSellers };
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

export const fetchProducts = ({ category, filter, sort, limit, offset }={}) => async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
        const res = await getProducts({
            category,
            filter,
            sort,
            limit,
            offset
        });

        dispatch(setProductList(res.data.products));
        dispatch(setTotal(res.data.total));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        dispatch(setFetchState("FAILED"));
    }
};

export const fetchProductById = (productId) => async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
        const res = await getProductById(productId);
        dispatch(setCurrentProduct(res.data));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        dispatch(setFetchState("FAILED"));
    }
};

export const fetchBestSellers = ({ sort, limit }) => async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
        const res = await getProducts({
            sort,
            limit
        });

        dispatch(setBestSellers(res.data.products));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        dispatch(setFetchState("FAILED"));
    }
}

export const fetchCategoryBestSellers = ({ category, currentProductId, limit }) => async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
        const res = await getProducts({
            category,
            sort: "sell_count:desc",
            limit: limit + 1 
        });

        const filtered = res.data.products.filter(p => p.id !== currentProductId);

        dispatch(setCategoryBestSellers(filtered.slice(0, limit)));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        dispatch(setFetchState("FAILED"));
    }
};
