import React from "react";
import Confirmation from "../../components/confirmation";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const ConfirmationPage = () => {
  return (
    <Layout>
      <Banner title="confirmation" />
      <Confirmation />
    </Layout>
  );
};

export default ConfirmationPage;
