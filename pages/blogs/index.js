import React from "react";
import Blogs from "../../components/blog";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const BlogsPage = () => {
  return (
    <Layout>
      <Banner title="blog" />
      <Blogs />
    </Layout>
  );
};

export default BlogsPage;
