import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer"; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
