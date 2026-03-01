import { combineReducers } from 'redux';
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import orderReducer from './orderReducer';

const combinedReducers = combineReducers({
    clientRed: clientReducer,
    productRed: productReducer,
    shoppingCartRed: shoppingCartReducer,
    orderRed: orderReducer
})

export default combinedReducers;