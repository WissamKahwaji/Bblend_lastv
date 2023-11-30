import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  products: [],
};

const categoryOneSlice = createSlice({
  name: "categoryOne",
  initialState,
  reducers: {
    storeCategoryOne(state, action) {
      return action.payload;
    },
  },
});

export const categoryOneActions = categoryOneSlice.actions;

export default categoryOneSlice.reducer;
