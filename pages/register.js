import { getSession } from "next-auth/client";
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

export async function getServerSideProps(ctx) {
  const session = await getSession({ req: ctx.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default RegisterPage;
