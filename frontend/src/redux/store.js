// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// import userReducer from './userSlice';   // Example for future slices

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer, // Uncomment and add more slices as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable if using non-serializable values like Date, FormData
    }),
  devTools: import.meta.env.MODE !== "production",
});

export default store;
