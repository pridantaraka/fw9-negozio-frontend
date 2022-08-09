import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getAddress = createAsyncThunk('user/getAddress', async(token)=>{
    const result ={};
    try{
        const {data} = await http(token).get('/user/Address')
        return data;
    }catch(error) {
        result.massage = error.response.data?.massage;
        return result;
    }
});