import { createSlice } from "@reduxjs/toolkit";

export const popUpSlice = createSlice({
  name: "popUp",
  initialState: {
    value: { show: false, content: "", backgroundColor: "", color: "" },
  },
  reducers: {
    signUp: (state, action) => {
      state.value = action.payload;
    },
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signUp, login } = popUpSlice.actions;

export default popUpSlice.reducer;
