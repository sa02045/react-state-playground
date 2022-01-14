import { createSlice } from "@reduxjs/toolkit";

// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(increase(), 1000));
// };
// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(decrease()), 1000);
// };

export const counterSlice = createSlice({
  name: "counter",
  initialState: { number: 0, diff: 1 },
  reducers: {
    increase: (state) => state.number + 1,
    decrease: (state) => state.number - 1,
  },
});
