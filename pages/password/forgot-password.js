import React from "react";
import ForgotPassword from "../../components/auth/ForgotPassword";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const ForgotPasswordPage = () => {
  return (
    <Layout title="Forgot password page">
      <Banner title="Forgot Password" />
      <ForgotPassword />
    </Layout>
  );
};

export default ForgotPasswordPage;
