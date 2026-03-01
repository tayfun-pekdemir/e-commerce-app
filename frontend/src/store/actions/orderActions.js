import { setCart, setPayment } from "./shoppingCartActions";
import { toast } from "react-toastify";
import { orderAPI } from "../../api/order";
import { previousOrdersAPI } from "../../api/order";

export const SET_ORDERS = "SET_ORDERS";
export const ADD_ORDER = "ADD_ORDER";
export const SET_CURRENT_ORDER = "SET_CURRENT_ORDER";

export const setOrders = ( orders ) => {
    return { type: SET_ORDERS, payload: orders }
};

export const addOrder = ( order ) => {
    return { type: ADD_ORDER, payload: order }
};

export const setCurrentOrder = (order) => ({
  type: SET_CURRENT_ORDER,
  payload: order
});

export const createOrderThunk = (payload) => async (dispatch) => {
   try {
      const response = await orderAPI(payload);

      dispatch(addOrder(response.data));     
      dispatch(setCurrentOrder(null)); 
      dispatch(setCart([]));
      dispatch(setPayment({
         cardNo: "",
         cardName: "",
         expireMonth: "",
         expireYear: "",
         ccv: "",
         installment: 1,
         threeDSecure: false
      }));

      toast.success("Order successful!");
      return true;

   } catch (err) {
      toast.error("Order failed");
      return false;
   }
};

export const fetchOrdersThunk = () => async (dispatch) => {
  try {
    const response = await previousOrdersAPI();

    dispatch({ type: "SET_ORDERS", payload: response.data });
    return response.data;
  } catch (err) {
    toast.error("Failed to fetch orders");
    console.error(err);
    return [];
  }
};