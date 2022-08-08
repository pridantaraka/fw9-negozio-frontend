import { combineReducers } from "@reduxjs/toolkit";
import amountitem from "./amountitem";
import auth from "./auth";
import users from "./users";

const reducer = combineReducers({
    amountitem,
    auth,
    users
});

export default reducer;