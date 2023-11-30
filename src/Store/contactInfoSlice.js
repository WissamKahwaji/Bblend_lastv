import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    storeContactInfo(state, action) {
      return action.payload;
    },
  },
});

export const contactInfoActions = contactInfoSlice.actions;

export default contactInfoSlice.reducer;
