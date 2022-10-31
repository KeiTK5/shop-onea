import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import dataSlice from "../slice/dataSlice";
import cartSlice from "../slice/cartSlice";
import userSlice from "../slice/userSlice";
import searchSlice from "../slice/searchSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    cart: cartSlice,
    user: userSlice,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
