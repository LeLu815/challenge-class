import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const couterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    // 리듀서 내부의 각 함수가 하나의 액션을 처리해준다.
    increment: (state, action) => {
      // 내부의 액션은 이미 선별되서 들어온다. action.type 의 값은 자동으로 정해짐 : counter/increment
      // 따라서 신경쓸 필요가 없다. 알아서 들어오기 때문 => payload만 관리햐주면 된다!
      const value = action.payload;
      state.count = state.count + parseInt(value);
    },
    decrement: (state, action) => {
      // toolkit을 사용하면 객체의 불변성 관리로부터 자유롭다. => state가 복잡해지면 복사해줘야할 행동들이 늘어나 매우 불편해진다.
      // 생성하거나 리턴하지 않아도 된다!!
      const value = action.payload;
      state.count = state.count - parseInt(value);
    },
  },
});

// 리듀서
export const counterReducer = couterSlice.reducer;
// 액션 크리에이터
export const { increment, decrement } = couterSlice.actions;
