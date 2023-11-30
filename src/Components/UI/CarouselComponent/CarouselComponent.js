import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";
const CarouselComponent = ({ items }) => {
  const { t } = useTranslation();
  // const items = [
  //   <div className={`mx-2`} key="1">
  //     <img
  //       src="https://i.imgur.com/xCD9oas.jpeg"
  //       alt="offer"
  //       className={`rounded-md`}
  //     />
  //     <h1 className={`text-center t`}>{t("15% discount")}</h1>
  //   </div>,
  //   <div className={`mx-2`} key="1">
  //     <img
  //       src="https://i.imgur.com/xCD9oas.jpeg"
  //       alt="offer"
  //       className={`rounded-md`}
  //     />
  //     <h1 className={`text-center`}>{t("15% discount")}</h1>
  //   </div>,
  //   <div className={`mx-2`} key="1">
  //     <img
  //       src="https://i.imgur.com/xCD9oas.jpeg"
  //       alt="offer"
  //       className={`rounded-md`}
  //     />
  //     <h1 className={`text-center`}>{t("15% discount")}</h1>
  //   </div>,
  // !
  // <div className={`mx-2`} key="1">
  //   <img
  //     src="https://i.imgur.com/xCD9oas.jpeg"
  //     alt="offer"
  //     className={`rounded-md h-[1/3]`}
  //   />
  //   <h1 className={`text-center`}></h1>
  // </div>,
  //  <div className={`mx-2`} key="1">
  //   <img
  //     src="https://i.imgur.com/xCD9oas.jpeg"
  //     alt="offer"
  //     className={`rounded-md h-[1/3]`}
  //   />
  //   <h1 className={`text-center`}></h1>
  // </div>,
  // <div className={`mx-2`} key="2">
  //   <img
  //     src="https://i.imgur.com/xCD9oas.jpeg"
  //     alt="offer"
  //     className={`rounded-md`}
  //   />
  //   <h1 className={`text-center`}>Item 2</h1>
  // </div>,
  // <div className={`mx-2`} key="3">
  //   <img
  //     src="https://i.imgur.com/xCD9oas.jpeg"
  //     alt="offer"
  //     className={`rounded-md`}
  //   />
  //   <h1 className={`text-center`}>Item 3</h1>
  // </div>,
  // Add more items as needed
  // ];

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={3000} // Specify the interval for autoplay in milliseconds
      disableButtonsControls // Disable next and previous buttons
      infinite // Enable infinite loop
      responsive={{
        0: { items: 3 },
        600: { items: 3 },
        900: { items: 3 },
        1024: { items: 3 },
        1100: { items: 3 },
        1200: { items: 3 },
        1400: { items: 3 },
      }}
    />
  );
};

export default CarouselComponent;
