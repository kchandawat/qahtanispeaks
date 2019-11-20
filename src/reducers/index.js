import { combineReducers } from "redux";
import data from "./data";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({ data, firebase: firebaseReducer });
