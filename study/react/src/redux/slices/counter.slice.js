import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      const value = action.payload;
      state.count = state.count + value;
    },
    decrement: (state, action) => {
      const value = action.payload;
      state.count = state.count - value;
    },
  },
});

export const counterReducer = counterSlice.reducer;
// 액션객체 생성함수
export const { increment, decrement } = counterSlice.actions;
