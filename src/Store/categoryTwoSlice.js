import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  products: [],
};

const categoryTwoSlice = createSlice({
  name: "categoryTwo",
  initialState,
  reducers: {
    storeCategoryTwo(state, action) {
      return action.payload;
    },
  },
});

export const categoryTwoActions = categoryTwoSlice.actions;

export default categoryTwoSlice.reducer;
