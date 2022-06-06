import { createSlice } from "@reduxjs/toolkit";

export const popUpSlice = createSlice({
  name: "popUp",
  initialState: {
    show: false,
    value: { content: "", backgroundColor: "", color: "", success: true },
  },
  reducers: {
    show: (state, action) => {
      state.show = true;
      state.value = action.payload;
    },
    hide: (state, action) => {
      state.show = false;
      state.value = action.payload;
    },
  },
});

export const { show, hide } = popUpSlice.actions;

export default popUpSlice.reducer;
