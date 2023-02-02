import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // WHATEVER YOU WRITE INSIDE IT IS CALLED AS ACTION CREATOR
    addItemToCart: (state, action) => {
      const item = action.payload;
      if (item.id) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItemToCart } = CartSlice.actions;

export default CartSlice.reducer;
