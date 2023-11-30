import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    storeOffers(state, action) {
      //   const { title, products: productObject } = action.payload;
      state = action.payload;
      // Convert the productObject into an array of products
      // const offers = Object.keys(action.payload).map((key) => ({
      //   ...action.payload[key],
      //   id: key, // Optional: Add a unique identifier if needed
      // }));

      // Update the state with the new category data

      return state;
    },
  },
});

export const offersActions = offersSlice.actions;

export default offersSlice.reducer;
