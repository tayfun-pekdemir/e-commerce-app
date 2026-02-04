import { SET_CATEGORIES, SET_PRODUCTLIST, SET_FETCHSTATE, SET_FILTER, SET_LIMIT, SET_OFFSET, SET_TOTAL, SET_CURRENT_PRODUCT, SET_BEST_SELLERS, SET_CATEGORY_BEST_SELLERS } from "../actions/productActions";

const initialState = {
    categories:[],
    productList:[],
    total:0,
    limit:25,
    offset:0,
    filter:"",
    fetchState:"NOT_FETCHED",
    currentProduct:null,
    bestSellers:[],
    categoryBestSellers:[]
}
const productReducer = ( state = initialState, action ) => {

    switch(action.type){
        
        case SET_CATEGORIES:
            return {...state, categories: action.payload };

        case SET_PRODUCTLIST:
            return {...state, productList: action.payload };

        case SET_FETCHSTATE:
            return {...state, fetchState: action.payload };

        case SET_FILTER:
            return {...state, filter: action.payload };

        case SET_LIMIT:
            return {...state, limit: action.payload };

        case SET_OFFSET:
            return {...state, offset: action.payload };

        case SET_TOTAL:
            return {...state, total: action.payload };

        case SET_CURRENT_PRODUCT:
            return {...state, currentProduct: action.payload };

        case SET_BEST_SELLERS:
            return {...state, bestSellers: action.payload };

        case SET_CATEGORY_BEST_SELLERS:
            return {...state, categoryBestSellers: action.payload };

        default:
            return state;
    }
}

export default productReducer;