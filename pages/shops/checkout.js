import React from "react";
import Checkout from "../../components/checkout";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const CheckoutPage = () => {
  return (
    <Layout>
      <Banner title="checkout" />
      <Checkout />
    </Layout>
  );
};

export default CheckoutPage;
