import React from "react";
import Image from "next/image";
import BlogAreaItem from "./BlogAreaItem";
import { blogs } from "../../dummyData/blogs";
import ReactPaginate from "react-paginate";
import BlogSideBar from "./blogSideBar";

const BlogArea = () => {
  const handlePageClick = (page) => {
    console.log(page);
  };
  return (
    <section className="blog_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog_left_sidebar">
              {blogs &&
                blogs.map((blog) => (
                  <BlogAreaItem key={blog.slug} blog={blog} />
                ))}

              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={blogs.length} // length of data
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
