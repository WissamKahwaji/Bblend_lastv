import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const mainLogoSlice = createSlice({
  name: "mainLogo",
  initialState,
  reducers: {
    storeMainLogo(state, action) {
      return action.payload;
    },
  },
});

export const mainLogoActions = mainLogoSlice.actions;

export default mainLogoSlice.reducer;
