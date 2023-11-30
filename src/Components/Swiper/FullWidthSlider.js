import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
// import "./FullWidthSlider.css";
const FullWidthSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false, // Show the dots
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 2000, // Set the auto-slide interval in milliseconds (2 seconds in this case)
    arrows: false, // Hide the arrows
    pauseOnHover: false, // Prevent pausing on hover
  };
  const sliderImgsData = useSelector((state) => state.sliderImgsSlice);

  return (
    <div className="full-width-slider">
      <Slider {...settings}>
        {sliderImgsData.map((ele, i) => (
          <div key={i}>
            <img className={`w-full`} src={ele.img} alt={ele.img.toString().slice(0, 3)} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullWidthSlider;
