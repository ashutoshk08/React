import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // return { ...state, count: state.count + 1 }; --> state update in plain javascript
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    customIncrement: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, customIncrement } =
  counterSlice.actions;
export default counterSlice.reducer;
