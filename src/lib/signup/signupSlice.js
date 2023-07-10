import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SIGN_UP = 'newuser/signup/';

const token = localStorage.getItem('token') || null;

export const newUser = createAsyncThunk(SIGN_UP, async(userInfo, thunkAPI) => {
     const API_URL = process.env.NEW_USER_URL;
     const options = {
          method: "POST",
          headers: {
      'content-type': 'application/json',
         },
     };
     try {
       return await axios.post(API_URL, JSON.stringify(userInfo),options);
     }catch(error) {
        return thunkAPI.rejectWithValue(error, "Error creating request");
     }
});

const initialState = {
     token,
     isLoading: false,
     error: null,
     success: false,
     status: '',
};

const signupSlice = createSlice({
     name: 'signup',
     initialState,
     reducers: {
          reset: (state) => ({
            ...state,
            isLoading: false,
            success: false,
            error: '',
            message: '',
          }),
        },
     extraReducers(reduce) {
          reduce
      .addCase(newUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.data.token);
        return {
          ...state,
          isLoading: false,
          success: true,
          token: action.payload.data.token,
          status: action.payload.status,
        };
      })
      .addCase(newUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(newUser.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        success: false,
        error: action.payload.error,
      }));
     }
})

export default signupSlice.reducer;