import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      const itemFromAdd = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemFromAdd) {
        itemFromAdd.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    reduceCart: (state, action) => {
      const itemFromAdd = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemFromAdd.quantity > 1) {
        itemFromAdd.quantity -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const itemFromAdd = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.items = state.items.filter((val) => val.id != itemFromAdd.id);
    },
  },
});

export const { addCart, reduceCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
