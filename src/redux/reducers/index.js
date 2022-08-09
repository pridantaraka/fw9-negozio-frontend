import { combineReducers } from "@reduxjs/toolkit";
import amountitem from "./amountitem";
import auth from "./auth";
import users from "./users";
import product from "./product";
import address from "./address";

const reducer = combineReducers({
    amountitem,
    auth,
    users,
    product,
    address
});

export default reducer;