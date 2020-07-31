import { combinerReducers } from "redux";
import count from "./count.js";

export default combinerReducers({ count });