import React from "react";
import Contact from "../../components/contact";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const ContactPage = () => {
  return (
    <Layout title="Contact page">
      <Banner title="contact" />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
