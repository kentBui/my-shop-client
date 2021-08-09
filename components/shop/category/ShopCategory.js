import React, { useState } from "react";
import CustomModal from "../../shared/CustomModal";
import RelatedProducts from "../../shared/RelatedProducts";
import ShopProducts from "./shopProducts";
import SideBar from "./sidebar/SideBar";

const ShopCategory = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <SideBar />
          <ShopProducts />
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default ShopCategory;
