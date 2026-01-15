export const SET_USER = "SET_USER";
export const SET_ADDRESSLIST = "SET_ADDRESSLIST";
export const SET_CREDITCARDS = "SET_CREDITCARDS";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
import { getRoles as getRolesAPI } from "../../api/auth";

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

export const fetchRoles = () => async (dispatch) => {
  try {
    const res = await getRolesAPI();
    dispatch(setRoles(res.data)); 
  } catch (err) {
    console.error("Failed to fetch roles:", err);
  }
};
