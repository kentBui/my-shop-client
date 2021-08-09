import React from "react";
import Elements from "../../components/extras/elements";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const ElementsPage = () => {
  return (
    <Layout title="Reused components page">
      <Banner title="element" />
      <Elements />
    </Layout>
  );
};

export default ElementsPage;
