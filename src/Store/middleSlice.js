import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const middleSlice = createSlice({
  name: "middle",
  initialState,
  reducers: {
    storeMiddle(state, action) {
      return action.payload;
    },
  },
});

export const middleActions = middleSlice.actions;

export default middleSlice.reducer;
