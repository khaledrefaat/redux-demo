import { createSlice } from '@reduxjs/toolkit';

const initialState = { showCart: true, cart: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    updateCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
