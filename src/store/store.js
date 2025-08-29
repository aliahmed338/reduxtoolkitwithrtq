import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice.js";
import { productApi } from "./api/productsApi.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});
