import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
// Redux store combining the cart and search reducers
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});