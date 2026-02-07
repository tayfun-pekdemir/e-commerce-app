import { SET_ADDRESS, SET_CART, SET_PAYMENT, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_COUNT, DECREASE_COUNT, TOGGLE_CHECKED } from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {}
};

const shoppingCartReducer = ( state=initialState, action ) => {

    switch(action.type){

        case SET_CART:
            return {...state, cart: action.payload };

        case SET_PAYMENT:
            return {...state, payment: action.payload };

        case SET_ADDRESS:
            return {...state, address: action.payload };

        case ADD_TO_CART:
            {
            const product = action.payload;

            const existingProduct = state.cart.find(item => item.product.id === product.id);

            if(existingProduct){
               return {...state, cart:state.cart.map(item => item.product.id === product.id ?
                 {...item, count: item.count+1 } : item
               )}
            };

            return {...state, cart: [
                ...state.cart,
                { count:1, checked:true, product }
            ]};
        }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload)
            };

        case INCREASE_COUNT:
            return {
                ...state,
                cart: state.cart.map(item =>
                item.product.id === action.payload
                    ? { ...item, count: item.count + 1 }
                    : item
                )
            };

        case DECREASE_COUNT:
            return {
                ...state,
                cart: state.cart
                .map(item =>
                    item.product.id === action.payload
                    ? { ...item, count: Math.max(1, item.count - 1) }
                    : item
                )
                .filter(item => item.count > 0)
            };

        case TOGGLE_CHECKED:
            return {
                ...state,
                cart: state.cart.map(item =>
                item.product.id === action.payload
                    ? { ...item, checked: !item.checked }
                    : item
                )
            };
        default:
            return state;
    }
}

export default shoppingCartReducer;