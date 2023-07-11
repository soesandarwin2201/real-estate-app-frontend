import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import signupSlice from "./signup/signupSlice";
import loginSlice from "./login/loginSlice";

const store = configureStore({
     reducer: {
       authentication: loginSlice,
       registration: signupSlice,
     },
     middleware: [logger,thunk],
});

export default store;