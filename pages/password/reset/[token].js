import React from "react";
import NewPassword from "../../../components/auth/NewPassword";
import Layout from "../../../components/layout";
import Banner from "../../../components/layout/Banner";

const ResetPasswordPage = () => {
  return (
    <Layout title="Reset password page">
      <Banner title="Reset Password" />
      <NewPassword />
    </Layout>
  );
};

export default ResetPasswordPage;
