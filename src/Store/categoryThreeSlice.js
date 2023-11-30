import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  products: [],
};

const categoryThreeSlice = createSlice({
  name: "categoryThree",
  initialState,
  reducers: {
    storeCategoryThree(state, action) {
      return action.payload;
    },
  },
});

export const categoryThreeActions = categoryThreeSlice.actions;

export default categoryThreeSlice.reducer;
