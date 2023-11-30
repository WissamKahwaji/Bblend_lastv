import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    storeColors(state, action) {
      return action.payload;
    },
  },
});

export const colorsActions = colorsSlice.actions;

export default colorsSlice.reducer;
