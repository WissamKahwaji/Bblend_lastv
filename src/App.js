import React, { useEffect, Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Root, { rootLoader } from "./Pages/Root/Root";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import { productsPageLoader } from "./Pages/ProductsPage/ProductsPage";
import { aboutUsPageLoader } from "./Pages/AboutUsPage/AboutUsPage";
import { extraPageTwoLoader } from "./Pages/ExtraPageTwo/ExtraPageTwo";
import { extraPageThreeLoader } from "./Pages/ExtraPageThree/ExtraPageThree";
import { contactUsPageLoader } from "./Pages/ContactUsPage/ContactUs";
import { singleProductPageLoaderFromProductsPage } from "./Pages/ProductsPage/singleProductPageLoaderFromProductsPage";
import { colorsActions } from "./Store/colorsSlice";
import { navLinksActions } from "./Store/navLinksSlice";
import { sliderImgsActions } from "./Store/sliderImgsSlice";
import { logoActions } from "./Store/logoSlice";
import { brandingActions } from "./Store/brandingSlice";
import { categoryOneActions } from "./Store/categoryOneSlice";
import { categoryTwoActions } from "./Store/categoryTwoSlice";
import { middleActions } from "./Store/middleSlice";
import { cartActions } from "./Store/cartSlice";
import CartPage from "./Pages/CartPage/CartPage";
import { extraPageOneSingleItemLoader } from "./Pages/ExtraPageOne/extraPageOneSingleItem";
import { collectionsActions } from "./Store/collectionsSlice";
import { categoryThreeActions } from "./Store/categoryThreeSlice";
import { contactInfoActions } from "./Store/contactInfoSlice";
import { socialActions } from "./Store/socialSlice";
import { checkOutFormAction } from "./Pages/CheckOutForm/CheckOutForm";
import { myOrdersPageLoader } from "./Pages/MyOrdersPage/MyOrdersPage";
import { myOrdersItemAction } from "./Components/MyOrdersItem/MyOrdersItem";
import { footerActions } from "./Store/footerSlice";
import { mainLogoActions } from "./Store/mainLogoSlice";
import { extraFourPageLoader } from "./Pages/ExtraPageFour/ExtraPageFour";
import { offersActions } from "./Store/offersSlice";
import useApiFetch from "./Hooks/useApiFetch";
import { baseURL } from "./API/baseURL";
import translationEn from "./Locales/en/translation.json";
import translationAr from "./Locales/ar/translation.json";
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const ProductsPage = lazy(() => import("./Pages/ProductsPage/ProductsPage"));
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage/AboutUsPage"));
const ExtraPageOne = lazy(() => import("./Pages/ExtraPageOne/ExtraPageOne"));
const ExtraPageTwo = lazy(() => import("./Pages/ExtraPageTwo/ExtraPageTwo"));
const ExtraPageThree = lazy(() =>
  import("./Pages/ExtraPageThree/ExtraPageThree")
);
const ExtraPageFour = lazy(() => import("./Pages/ExtraPageFour/ExtraPageFour"));
const ContactUsPage = lazy(() => import("./Pages/ContactUsPage/ContactUs"));
const SingleProductPage = lazy(() =>
  import("./Pages/SingleProductPage/SingleProductPage")
);
const CheckOutForm = lazy(() => import("./Pages/CheckOutForm/CheckOutForm"));
const LastCheckOutForm = lazy(() =>
  import("./Pages/LastCheckOutForm/LastCheckOutForm")
);
const MyOrdersPage = lazy(() => import("./Pages/MyOrdersPage/MyOrdersPage"));
const AfterPayment = lazy(() => import("./Pages/AfterPayment/AfterPayment"));
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      ar: { translation: translationAr },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/Products",
          element: <ProductsPage />,
          loader: productsPageLoader,
        },
        {
          path: "/checkOutForm",
          element: <CheckOutForm />,
          action: checkOutFormAction,
        },
        {
          path: "/paymentGateway",
          element: <LastCheckOutForm />,
        },
        {
          path: "/Products/:productID",
          element: <SingleProductPage />,
          loader: singleProductPageLoaderFromProductsPage,
        },
        // {
        //   path: "/Products/packages",
        //   element: <ProductsPage />,
        //   loader: productsPageLoader,
        // },
        {
          path: "/About_Us",
          element: <AboutUsPage />,
          loader: aboutUsPageLoader,
        },
        {
          path: "/Contact_Us",
          element: <ContactUsPage />,
          loader: contactUsPageLoader,
        },
        {
          path: "/my_orders",
          element: <MyOrdersPage />,
          loader: myOrdersPageLoader,
          action: myOrdersItemAction,
        },
        {
          path: "/extra_1",
          element: <ExtraPageOne />,
        },
        {
          path: "/extra_1/:productID",
          element: <SingleProductPage />,
          loader: extraPageOneSingleItemLoader,
        },
        {
          path: "/extra_2",
          element: <ExtraPageTwo />,
          loader: extraPageTwoLoader,
        },
        {
          path: "/extra_3",
          element: <ExtraPageThree />,
          loader: extraPageThreeLoader,
        },
        {
          path: "/extra_4",
          element: <ExtraPageFour />,
          loader: extraFourPageLoader,
        },
        {
          path: "/my_cart",
          element: <CartPage />,
        },
        // {
        //   path: "/:categoryNumber",
        //   element: <p></p>,
        // },
        // {
        //   path: "/:categoryNumber/:productID",
        //   element: <SingleProductPage />,
        //   loader: singleProductPageLoader,
        // },
        {
          path: "/paid",
          element: <AfterPayment />,
        },
      ],
    },
  ]);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartSlice);
  const collectionsData = useSelector((state) => state.collectionsSlice);

  const { dataMainLogo, errorMainLogo, isLoadingMainLogo } = useApiFetch(
    `${baseURL}/MainLogo`,
    mainLogoActions.storeMainLogo
  );

  const { dataColors, errorColors, isLoadingColors } = useApiFetch(
    `${baseURL}/colors`,
    colorsActions.storeColors
  );

  const { dataNavLinks, errorNavLinks, isLoadingNavLinks } = useApiFetch(
    `${baseURL}/lastThreeNavLinks`,
    navLinksActions.storeNavLinks
  );

  const { dataSliderImgs, errorSliderImgs, isLoadingSliderImgs } = useApiFetch(
    `${baseURL}/sliderImgs`,
    sliderImgsActions.storeSliderImgs
  );

  const { dataLogo, errorLogo, isLoadingLogo } = useApiFetch(
    `${baseURL}/logo`,
    logoActions.storeLogo
  );
  const { dataCollection, errorCollection, isLoadingCollection } = useApiFetch(
    `${baseURL}/collections`,
    collectionsActions.storeCollections
  );

  const { dataBranding, errorBranding, isLoadingBranding } = useApiFetch(
    `${baseURL}/branding`,
    brandingActions.storeBranding
  );
  const { dataFooter, errorFooter, isLoadingFooter } = useApiFetch(
    `${baseURL}/footer`,
    footerActions.storeFooter
  );
  const { dataCategoryOne, errorCategoryOne, isLoadingCategoryOne } =
    useApiFetch(
      `${baseURL}/products/by-type?type=All Kind of Hair`,
      categoryOneActions.storeCategoryOne
    );
  const { dataCategoryTwo, errorCategoryTwo, isLoadingCategoryTwo } =
    useApiFetch(
      `${baseURL}/products/by-type?type=Package`,
      categoryTwoActions.storeCategoryTwo
    );
  const { dataMiddle, errorMiddle, isLoadingMiddle } = useApiFetch(
    `${baseURL}/middle`,
    middleActions.storeMiddle
  );
  const { dataCategoryThree, errorCategoryThree, isLoadingCategoryThree } =
    useApiFetch(
      `${baseURL}/products/by-type?type=Accessories`,
      categoryThreeActions.storeCategoryThree
    );
  const { dataContactInfo, errorContactInfo, isLoadingContactInfo } =
    useApiFetch(
      `${baseURL}/contactUs`,
      contactInfoActions.storeContactInfo
      // categoryThreeActions.storeCategoryThree
    );
  const { dataSocialMedia, errorSocialMedia, isLoadingSocialMedia } =
    useApiFetch(
      `${baseURL}/socialMediaLinks`,
      socialActions.storeSocial
      // categoryThreeActions.storeCategoryThree
    );
  const { dataOffers, errorOffers, isLoadingOffers } = useApiFetch(
    `${baseURL}/offers`,
    offersActions.storeOffers
    // categoryThreeActions.storeCategoryThree
  );
  useEffect(() => {
    // Retrieve cartData from localStorage when the component mounts
    const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
    if (cartItems) {
      // If there are items in localStorage, dispatch to update the Redux store
      dispatch(cartActions.retrieveFromLocalStorage(cartItems));
    } else {
      // If there are no items in localStorage, you can choose to initialize your cart differently
      // For example, you might want to initialize it with an empty array
      // dispatch(cartActions.retrieveFromLocalStorage([]));
    }
  }, [dispatch]);

  useEffect(() => {
    // Get the current cart data from the Redux store
    const currentCartData = cartData; // Replace with the actual path to your cart data in the Redux store

    // Save the current cart data to localStorage whenever it changes
    window.localStorage.setItem("cartItems", JSON.stringify(currentCartData));
  }, [cartData]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage) {
      // Step 2: Set the language in i18next
      i18n.changeLanguage(storedLanguage);

      // Step 3: Update Page Direction
      document.documentElement.dir = storedLanguage === "ar" ? "rtl" : "ltr";
    } else {
      // If language is not found in localStorage, set a default language
      const defaultLanguage = "en";
      i18n.changeLanguage(defaultLanguage);
      localStorage.setItem("language", defaultLanguage); // Store the default language
      document.documentElement.dir = defaultLanguage === "ar" ? "rtl" : "ltr";
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<LoadingPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </I18nextProvider>
  );
};

export default App;
