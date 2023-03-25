import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./Reducer";
export const store = legacy_createStore(CartReducer, applyMiddleware(thunk));
