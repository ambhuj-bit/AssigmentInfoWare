import { combineReducers } from "redux";
import postItems from "./reducer";

export default combineReducers({
	post:postItems,
});