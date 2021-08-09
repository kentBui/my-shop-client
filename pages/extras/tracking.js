import React from "react";
import Tracking from "../../components/extras/Tracking";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const TrackingPage = () => {
  return (
    <Layout title="Tracking page">
      <Banner title="order tracking" />
      <Tracking />
    </Layout>
  );
};

export default TrackingPage;
