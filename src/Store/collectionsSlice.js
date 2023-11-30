import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    storeCollections(state, action) {
      return action.payload;
    },
  },
});

export const collectionsActions = collectionsSlice.actions;

export default collectionsSlice.reducer;
