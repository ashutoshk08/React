import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counterSlice";
import cartSliceReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSliceReducer,
    cartSlice: cartSliceReducer,
  },
});

export default store;
