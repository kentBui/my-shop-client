import React from "react";
import CustomSlide from "../../shared/CustomSlide";
import ExclusiveItem from "./ExclusiveItem";

const ExclusiveSlide = () => {
  return (
    <CustomSlide label="product">
      <ExclusiveItem />
      <ExclusiveItem />
      <ExclusiveItem />
      <ExclusiveItem />
    </CustomSlide>
  );
};

export default ExclusiveSlide;
