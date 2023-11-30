import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    storeFooter(state, action) {
      return action.payload;
    },
  },
});

export const footerActions = footerSlice.actions;

export default footerSlice.reducer;
