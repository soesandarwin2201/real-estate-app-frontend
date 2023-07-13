import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SIGN_UP = 'house/newuser/SIGNUP';

const token = localStorage.getItem('token') || null;

export const newUser = createAsyncThunk(SIGN_UP, async(formdata, thunkAPI) => {
     const API_URL = 'http://127.0.0.1:3000/users';
     const options = {
          method: "POST",
          headers: {
            'Content-Type': 'multipart/form-data' ,
         },
     };
     try {
       return await axios.post(API_URL, formdata,options);
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
            error: null,
            success: false,
            status: '',
          }),
        },
     extraReducers(reduce) {
          reduce
      .addCase(newUser.fulfilled, (state, action) => {
        const formData = action.payload;
        localStorage.setItem('token', formData.data.token);
        return {
          ...state,
          isLoading: false,
          success: true,
          token: formData.data.token,
          status: formData.status,
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

export const { reset } = signupSlice.actions;
export default signupSlice.reducer;