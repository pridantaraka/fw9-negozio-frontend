import { combineReducers } from "@reduxjs/toolkit";
import amountitem from "./amountitem";
import auth from "./auth";

const reducer = combineReducers({
    amountitem,
    auth
});

export default reducer;