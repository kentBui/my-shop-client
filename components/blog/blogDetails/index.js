import Image from "next/image";
import React from "react";
import BlogSideBar from "../blogSideBar";
import CommentForm from "./CommentForm";
import CommentsArea from "./CommentsArea";
import NavigationPost from "./NavigationPost";
import SinglePost from "./SinglePost";

const BlogDetails = () => {
  return (
    <section className="blog_area single-post-area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 posts-list">
            <SinglePost />
            <NavigationPost />
            <CommentsArea />
            <CommentForm />
          </div>
          <div className="col-lg-4">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
