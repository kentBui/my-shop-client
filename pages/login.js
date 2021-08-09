import React from "react";
import Login from "../components/auth/Login";
import Layout from "../components/layout";
import Banner from "../components/layout/Banner";

const LoginPage = () => {
  return (
    <Layout title="Login page">
      <Banner title="login" />
      <Login />
    </Layout>
  );
};

export default LoginPage;
