import React from "react";
import RelatedProducts from "../../shared/RelatedProducts";
import ProductDescriptionArea from "./ProductDescriptionArea";
import ProductImage from "./ProductImage";

const ProductDetails = () => {
  return (
    <>
      <ProductImage />
      <ProductDescriptionArea />
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
