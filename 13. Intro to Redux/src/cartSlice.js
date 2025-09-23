import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (currState) => {
      currState.count -= 1;
    },
    empty: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, empty } = cartSlice.actions;
export default cartSlice.reducer;
