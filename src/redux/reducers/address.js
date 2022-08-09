import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../asyncAction/address";

const initialState ={
    result:{}
}

export const address = createSlice({
    name:'address',
    initialState,
    reducers:{},
    extraReducers: (build) => {
        build.addCase(getAddress.fulfilled, (state, action)=>{
            state.result = action.payload?.results;
        })
    }
})

export {getAddress};
export default address.reducer;