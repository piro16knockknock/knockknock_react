import { createSlice } from "@reduxjs/toolkit";

export const popUpSlice = createSlice({
  name: "popUp",
  initialState: { value: { show: false, content: "" } },
  reducers: {
    signUp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signUp } = popUpSlice.actions;

export default popUpSlice.reducer;
