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
export const updateUsers = createAsyncThunk('/users/updateUsers', async(request)=>{
    const result = {};
    try {
      const token = request.token;
      const formData = new FormData();
      formData.append('full_name', request.full_name);
      formData.append('email', request.email);
      formData.append('phone_number', request.phone_number);
      formData.append('gender', request.gender);
      formData.append('date_of_birth', request.picture);
      const {data} = await http(token).patch('/users', formData, {
        headers: {
          'content-type' : 'multipart/form-data'
        }
      });
      // result.successMsg = data.message;
      // result = data
      return data;
    } catch (error) {
      result.errorMsg = error.response.data.message;
      return result;
    }
  });