import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, style, onClick, label } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src={
          label === "product"
            ? "/images/home/next(1).webp"
            : "/images/home/next.webp"
        }
        alt=""
        width={50}
        height={25}
      />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick, label } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image
        src={
          label === "product"
            ? "/images/home/prev(1).webp"
            : "/images/home/prev.webp"
        }
        alt=""
        width={50}
        height={25}
      />
    </div>
  );
};

const CustomSlide = ({ children, label }) => {
  const settings = {
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow label={label} />,
    prevArrow: <PrevArrow label={label} />,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlide;
