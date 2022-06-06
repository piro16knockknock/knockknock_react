import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import popUpReducer from "./pop-up";

export default configureStore({
  reducer: {
    popUp: popUpReducer,
  },
});
