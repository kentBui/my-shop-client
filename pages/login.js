import { getSession } from "next-auth/client";
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

export default LoginPage;
