import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import combinedReducers from "./reducers/combinedReducers";

const store = createStore(
    combinedReducers,
    applyMiddleware(thunk, logger)
);

export default store;
