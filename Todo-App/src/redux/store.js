import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication";
import taskReducer from "./reducer"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});
export default store;
