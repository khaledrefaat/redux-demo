import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import counterSlice from './counter-slice';

// redux way to make reducers
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, counter: state.counter + parseInt(action.amount) };
//     case 'decrement':
//       return { ...state, counter: state.counter - parseInt(action.amount) };
//     case 'toggle':
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

// for many reducers you should do that
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
