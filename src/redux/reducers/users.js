import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateUsers } from "../asyncAction/users";

const initialState ={
    result:{}
}

export const users = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (build) => {
        build.addCase(getUsers.fulfilled, (state, action)=>{
            state.result = action.payload?.results;
        })
        build.addCase(updateUsers.fulfilled, (state, action)=>{
            state.result = action.payload?.results;
            state.successMsg = action.payload?.results.message;
        });
    }
})

export {getUsers};
export default users.reducer;