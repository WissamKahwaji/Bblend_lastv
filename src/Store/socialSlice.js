import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    storeSocial(state, action) {
      return action.payload;
    },
  },
});

export const socialActions = socialSlice.actions;

export default socialSlice.reducer;
