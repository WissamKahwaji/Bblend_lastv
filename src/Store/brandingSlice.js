import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const brandingSlice = createSlice({
  name: "branding",
  initialState,
  reducers: {
    storeBranding(state, action) {
      return action.payload;
    },
  },
});

export const brandingActions = brandingSlice.actions;

export default brandingSlice.reducer;
