import React from "react";
import BlogDetails from "../../components/blog/blogDetails";
import Layout from "../../components/layout";
import Banner from "../../components/layout/Banner";

const BlogDetailsPage = () => {
  return (
    <Layout>
      <Banner title="blog details" />
      <BlogDetails />
    </Layout>
  );
};

export default BlogDetailsPage;
