import { createSlice } from '@reduxjs/toolkit';

const initialState = { showCart: true, cart: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const isItem = state.cart.find(
        item => item.title === action.payload.title
      );
      if (isItem) {
        isItem.quantity = isItem.quantity + 1;
        isItem.total = isItem.quantity * isItem.price;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    removeFromCart(state, action) {
      const exsistingItem = state.cart.find(
        ({ title }) => title === action.payload.title
      );

      if (exsistingItem.quantity === 1) {
        state.cart = state.cart.filter(
          item => item.title !== action.payload.title
        );
      } else {
        exsistingItem.quantity--;
        exsistingItem.total = exsistingItem.total - exsistingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;