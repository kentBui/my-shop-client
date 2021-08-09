import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const CustomSlideDetails = ({ children }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlideDetails;
