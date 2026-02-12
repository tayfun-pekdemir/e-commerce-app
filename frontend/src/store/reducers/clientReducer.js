import { SET_USER, SET_ADDRESSLIST, SET_CREDITCARDS, SET_ROLES, SET_THEME, SET_LANGUAGE, ADD_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS } from "../actions/clientActions";

const initialState={
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en"
}

const clientReducer = ( state = initialState, action )=> {

    switch(action.type){

        case SET_USER:
            return {...state, user: action.payload};

        case SET_ADDRESSLIST:
            return {...state, addressList: action.payload};

        case SET_CREDITCARDS:
            return {...state, creditCards: action.payload};
        
        case SET_ROLES:
            return {...state, roles: action.payload};

        case SET_THEME:
            return {...state, theme: action.payload};

        case SET_LANGUAGE:
            return {...state, language: action.payload};

        case ADD_ADDRESS:
            return {...state, 
                addressList: [...state.addressList, action.payload]};

        case UPDATE_ADDRESS:
            return {...state, 
                addressList: state.addressList.map(address => address.id === action.payload.id ? action.payload : address)};

        case DELETE_ADDRESS:
            return {...state, 
                addressList: state.addressList.filter(address => address.id !== action.payload )};

        default:
            return state;
    }

}

export default clientReducer;