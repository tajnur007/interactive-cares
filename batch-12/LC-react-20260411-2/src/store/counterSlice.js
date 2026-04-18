import { createSlice } from '@reduxjs/toolkit';

// const initValue = {
//   count: 0,
// };

export const counterSlice = createSlice({
  name: 'counter',
  // initialState: initValue,
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    addFive: (state) => {
      state.count = state.count + 5;
    },
    addCustom: (state, action) => {
      state.count = state.count + action.payload;
    },
  }
});

export const { increment, decrement, addFive, addCustom } = counterSlice.actions;

export default counterSlice.reducer;