import { combineReducers } from "redux";
import { reducerOne } from "../reducers/reducerOne";
import { reducerTwo } from "../reducers/reducerTwo";

export const rootReducer = combineReducers({ reducerOne, reducerTwo });
