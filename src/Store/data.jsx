import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: {
    name: "flora",
    gender: "여성",
    age: 26,
  },
  //? state 변경하는 법
  reducers: {
    changeData(state, action) {
      state.user = action.payload;
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});

//? 2) 만든 함수 export해야 함
export const { changeData } = user.actions;
