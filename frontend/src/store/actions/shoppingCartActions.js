export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";

export const setCart = ( cart ) => {
    return { type: SET_CART, payload: cart};
};

export const setPayment = ( payment ) => {
    return { type: SET_PAYMENT, payload: payment };
};

export const setAddress = ( address ) => {
    return { type: SET_ADDRESS, payload: address };
};

export const addToCart = ( product ) => {
    return { type: ADD_TO_CART, payload: product };
};

export const removeFromCart = ( productId ) => {
    return { type: REMOVE_FROM_CART, payload: productId };
};

export const increaseCount = ( productId ) => {
    return { type: INCREASE_COUNT, payload: productId };
};

export const decreaseCount = ( productId ) => {
    return { type: DECREASE_COUNT, payload: productId };
};

export const toggleChecked = ( productId ) => {
    return { type: TOGGLE_CHECKED, payload: productId };
};