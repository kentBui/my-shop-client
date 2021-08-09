import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Layout from "../components/layout";
import Banner from "../components/layout/Banner";

const RegisterPage = () => {
  return (
    <Layout title="Create account page">
      <Banner title="register" />
      <Register />
    </Layout>
  );
};

export default RegisterPage;
