import { ADD_ORDER, SET_ORDERS, SET_CURRENT_ORDER } from "../actions/orderActions";

const initialState = {
  orders: [],
  currentOrder:null,
};

const orderReducer = (state = initialState, action) => {
  switch(action.type) {

    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        currentOrder : action.payload

      };

    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };

    case SET_CURRENT_ORDER:
        return {
            ...state,
            currentOrder: action.payload
      };

    default:
      return state;
  }
};

export default orderReducer;