import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getUsers = createAsyncThunk('user/getUser', async(token)=>{
    const result ={};
    try{
        const {data} = await http(token).get('/user')
        return data;
    }catch(error) {
        result.massage = error.response.data?.massage;
        return result;
    }
});