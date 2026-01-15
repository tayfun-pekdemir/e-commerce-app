import { combineReducers } from 'redux';
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const combinedReducers = combineReducers({
    clientRed: clientReducer,
    productRed: productReducer,
    shoppingCartRed: shoppingCartReducer
})

export default combinedReducers;