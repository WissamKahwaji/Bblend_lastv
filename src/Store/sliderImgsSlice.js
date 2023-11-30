import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const sliderImgsSlice = createSlice({
  name: "sliderImgs",
  initialState,
  reducers: {
    storeSliderImgs(state, action) {
      const { first, second, third } = action.payload;

      // Create new objects for the items to be added
      const newItems = [
        {
          img: first,
        },
        {
          img: second,
        },
        {
          img: third,
        },
      ];
      // Push the new items to the end of the state array
      state.push(...newItems);
    },
  },
});

export const sliderImgsActions = sliderImgsSlice.actions;

export default sliderImgsSlice.reducer;
