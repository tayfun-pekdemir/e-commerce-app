export const SET_USER = "SET_USER";
export const SET_ADDRESSLIST = "SET_ADDRESSLIST";
export const SET_CREDITCARDS = "SET_CREDITCARDS";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
import { getRolesAPI, loginAPI, verifyAPI } from "../../api/auth";
import { toast } from "react-toastify";
import { setAuthToken } from "../../api/axios";
import { addAddressAPI, deleteAddressAPI, getAddressesAPI, updateAddressAPI } from "../../api/address";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";

export const setUser = ( user ) => {
  return { type: SET_USER, payload: user };
};

export const setAddressList = ( addressList ) => {
    return { type: SET_ADDRESSLIST, payload: addressList };
}

export const setCreditCards = ( creditCards ) => {
    return { type: SET_CREDITCARDS, payload: creditCards };
}

export const setRoles = ( roles ) => {
  return { type: SET_ROLES, payload: roles };
};

export const setTheme = ( theme ) => {
  return { type: SET_THEME, payload: theme };
};

export const setLanguage = ( language ) => {
    return { type: SET_LANGUAGE, payload: language };
};

export const addAddress = ( formData ) => {
    return { type: ADD_ADDRESS, payload: formData };
};

export const updateAddress = ( formData ) => {
    return { type: UPDATE_ADDRESS, payload: formData };
};

export const deleteAddress = ( addressId ) => {
    return { type: DELETE_ADDRESS, payload: addressId };
};

export const fetchRoles = () => async (dispatch) => {
  try {
    const res = await getRolesAPI();
    dispatch(setRoles(res.data)); 
  } catch (err) {

  }
};

export const loginUser = ({ email, password, remember }) => async (dispatch) => {
  try {

    const res = await loginAPI({ email, password });
    const { token, name, role_id } = res.data;

    const user = { name, email, role_id, token };

    dispatch(setUser(user));

    setAuthToken(token);

    if (remember) localStorage.setItem("token", token);

    toast.success("Login successful!");
    return user;

  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed!");
    
  }
};

export const verifyUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  setAuthToken(token);

  try {
    const res = await verifyAPI();
    const { name, email, role_id, token: newToken } = res.data;

    const user = { name, email, role_id, token: newToken };

    dispatch(setUser(user));
    setAuthToken(newToken);
    localStorage.setItem("token", newToken);
  } catch (err) {

    localStorage.removeItem("token");
    setAuthToken(null);
    dispatch(setUser(null));

  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(setUser(null));
  localStorage.removeItem("token");
  setAuthToken(null);
  
};

export const fetchAddressList = () => async (dispatch) => {
  
  try {
    const res = await getAddressesAPI();
    dispatch(setAddressList(res.data));
  } catch (error) {
    toast.error("Addresses could not be fetched");
  }
}

export const addAddressThunk = (formData) => async (dispatch) => {

  try {
    const res = await addAddressAPI(formData);
    dispatch(addAddress(res.data[0]));
    toast.success("Address added");
  } catch (error) {
    toast.error("Address could not be added");
  }
}

export const updateAddressThunk = (formData) => async (dispatch) => {

  try {
    const res = await updateAddressAPI(formData);
    dispatch(updateAddress(res.data));
    toast.success("Address updated");
  } catch (error) {
    toast.error("Address could not be updated");
  }
}

export const deleteAddressThunk = (addressId) => async (dispatch) => {

  try {
    await deleteAddressAPI(addressId);
    dispatch(deleteAddress(addressId));
    toast.success("Address deleted");
  } catch (error) {
    toast.error("Address could not be deleted");
  }
}