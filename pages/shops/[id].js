import React from "react";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";
import ProductDetails from "../../components/shop/products/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <Layout>
      <Banner title="Product Details" />
      <ProductDetails />
    </Layout>
  );
};

export default ProductDetailsPage;
