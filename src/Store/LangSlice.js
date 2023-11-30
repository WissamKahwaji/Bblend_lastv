import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: localStorage?.getItem("i18nextLng"),
    direction:localStorage?.getItem("i18nextLng") ==="en" ? "ltr" : "rtl"
        
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload.lang;
      state.direction = action.payload.direction;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
