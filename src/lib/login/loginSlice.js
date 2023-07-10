import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { create } from "domain";
import { userInfo } from "os";
import { async } from "q";

const LOGIN = 'house/authentication/LOGIN';
const token = localStorage.getItem('token') || null;

export const loginUser = createAsyncThunk(LOGIN, async( userInfo, thunkAPI) => {
     const options = {
          method: "POST",
          headers: {
        'content-type': 'application/json',
        },
     }; 
     try {
          return await axios.post(LOGIN, JSON.stringify(userInfo), options);
     }
     catch(error){
          return thunkAPI.rejectWithValue(error, "Error creating request");
     }
});

const initialState = {
     token,
     isLoading: false,
     success: false,
     error: '',
};

const loginSlice = createSlice({
     name: 'login',
     initialState,
     reducers: {
          logout: (state) => {
            localStorage.removeItem('token');
            return {
              ...state,
              isLoading: false,
              success: false,
              error: '',
              token: '',
            };
          },
        },
        extraReducers: (reduce) => {
          reduce
            .addCase(loginUser.pending, (state) => ({
              ...state,
              isLoading: true,
            }));
          reduce.addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.data.token);
            return {
              ...state,
              isLoading: false,
              success: true,
              token: action.payload.data.token,
              status: action.payload.status,
            };
          });
          reduce.addCase(loginUser.rejected, (state) => ({
            ...state,
            isLoading: false,
            success: false,
          }));
        },
})