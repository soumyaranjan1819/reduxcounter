import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.count < 10) {
        state.count += 1;
      } else alert("Reached maximum limit");
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
    decrementByValue: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByValue,
  decrementByValue,
} = counterSlice.actions;
export default counterSlice.reducer;
