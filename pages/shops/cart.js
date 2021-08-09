import React from "react";
import ShoppingCart from "../../components/cart";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const ShopCartPage = () => {
  return (
    <Layout>
      <Banner title="cart" />
      <ShoppingCart />
    </Layout>
  );
};

export default ShopCartPage;
