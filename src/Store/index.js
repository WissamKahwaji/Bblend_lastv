import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colorsSlice";
import navLinksSlice from "./navLinksSlice";
import sliderImgsSlice from "./sliderImgsSlice";
import logoSlice from "./logoSlice";
import brandingSlice from "./brandingSlice";
import categoryOneSlice from "./categoryOneSlice";
import categoryTwoSlice from "./categoryTwoSlice";
import middleSlice from "./middleSlice";
import cartSlice from "./cartSlice";
import collectionsSlice from "./collectionsSlice";
import categoryThreeSlice from "./categoryThreeSlice";
import contactInfoSlice from "./contactInfoSlice";
import socialSlice from "./socialSlice";
import footerSlice from "./footerSlice";
import mainLogoSlice from "./mainLogoSlice";
import offersSlice from "./offersSlice";
import LangSlice from "./LangSlice";

const store = configureStore({
  reducer: {
    colorsSlice: colorsSlice,
    navLinksSlice: navLinksSlice,
    sliderImgsSlice: sliderImgsSlice,
    logoSlice: logoSlice,
    brandingSlice: brandingSlice,
    categoryOneSlice: categoryOneSlice,
    categoryTwoSlice: categoryTwoSlice,
    categoryThreeSlice: categoryThreeSlice,
    middleSlice: middleSlice,
    cartSlice: cartSlice,
    collectionsSlice: collectionsSlice,
    contactInfoSlice: contactInfoSlice,
    socialSlice: socialSlice,
    footerSlice: footerSlice,
    mainLogoSlice: mainLogoSlice,
    offersSlice: offersSlice,
    lang:LangSlice
  },
});

export default store;
