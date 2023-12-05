import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/Products?type=",
  },
  {
    title: "About Us",
    path: "/About_Us",
  },
  {
    title: "Contact Us",
    path: "/Contact_Us",
  },
  {
    title: "My Orders",
    path: "/My_Orders",
  },
];

const navLinksSlice = createSlice({
  name: "navLinks",
  initialState,
  reducers: {
    storeNavLinks(state, action) {
      state.push(...action.payload);
    },
  },
});

export const navLinksActions = navLinksSlice.actions;

export default navLinksSlice.reducer;
