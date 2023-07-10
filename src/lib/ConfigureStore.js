import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
     reducer: {

     },
     middleware: [logger,thunk],
});

export default store;