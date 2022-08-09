import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../asyncAction/product";

const initialState ={
    result:{}
}

export const product = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers: (build) => {
        build.addCase(getProduct.fulfilled, (state, action)=>{
            state.result = action.payload?.results;
        })
    }
})

export {getProduct};
export default product.reducer;