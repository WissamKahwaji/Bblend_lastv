import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const logoSlice = createSlice({
  name: "logo",
  initialState,
  reducers: {
    storeLogo(state, action) {
      return action.payload;
    },
  },
});

export const logoActions = logoSlice.actions;

export default logoSlice.reducer;
