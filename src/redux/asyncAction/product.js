import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getProduct = createAsyncThunk('user/getProduct', async(token)=>{
    const result ={};
    try{
        const {data} = await http(token).get('/user/Product')
        return data;
    }catch(error) {
        result.massage = error.response.data?.massage;
        return result;
    }
});