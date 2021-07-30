import React from "react";
import Home from "../components/home";
import Layout from "../components/layout";
import HomeBanner from "../components/layout/HomeBanner";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <Home />
    </Layout>
  );
};

export default HomePage;
