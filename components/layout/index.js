import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

const Layout = ({ children, title = "My Shop" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ToastContainer position="top-right" />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
