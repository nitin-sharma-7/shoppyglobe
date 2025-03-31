import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice";
const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default cartStore;
