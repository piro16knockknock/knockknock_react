import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "popUauth",
  initialState: {
    user: { accessToken: "", nickname: "", homename: "" },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
