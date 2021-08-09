import React from "react";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";
import ShopCategory from "../../components/shop/category/ShopCategory";

const ShopCategoryPage = () => {
  return (
    <Layout>
      <Banner title="shop category" />
      <ShopCategory />
    </Layout>
  );
};

export default ShopCategoryPage;
