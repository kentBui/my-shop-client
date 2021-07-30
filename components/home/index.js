import React from "react";
import RelatedProducts from "../shared/RelatedProducts";
import BrandArea from "./BrandArea";
import CategoryArea from "./CategoryArea";
import ExclusiveDeal from "./ExclusiveDeal";
import Features from "./Features";
import ProductsArea from "./ProductsArea";

const Home = () => {
  return (
    <>
      <Features />
      <CategoryArea />
      <ProductsArea />
      <ExclusiveDeal />
      <BrandArea />
      <RelatedProducts />
    </>
  );
};

export default Home;
