import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationPost = () => {
  // get api for prev post and next post
  return (
    <div className="navigation-area">
      <div className="row">
        <div className="flex-row col-lg-6 col-md-6 col-12 nav-left d-flex justify-content-start align-items-center">
          <div className="thumb">
            <Link href={`/blogs/prev-post-slug`}>
              <a>
                <div className="fix-img">
                  <Image
                    width={60}
                    height={60}
                    className="img-fluid"
                    src="/images/blog_details/prev.jpg"
                    alt=""
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="arrow">
            <Link href={`/blogs/prev-post-slug`}>
              <a>
                <i
                  className="text-white fa fa-arrow-left"
                  aria-hidden="true"
                ></i>
              </a>
            </Link>
          </div>
          <div className="detials">
            <p>Prev Post</p>
            <Link href={`/blogs/prev-post-slug`}>
              <a>
                <h4>prev-post-name</h4>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-row col-lg-6 col-md-6 col-12 nav-right d-flex justify-content-end align-items-center">
          <div className="detials">
            <p>Next Post</p>
            <Link href={`/blogs/next-post-slug`}>
              <a>
                <h4>next-post-name</h4>
              </a>
            </Link>
          </div>
          <div className="arrow">
            <Link href={`/blogs/next-post-slug`}>
              <a>
                <i
                  className="text-white fa fa-arrow-right"
                  aria-hidden="true"
                ></i>
              </a>
            </Link>
          </div>
          <div className="thumb">
            <Link href={`/blogs/next-post-slug`}>
              <a>
                <div className="fix-img">
                  <Image
                    width={60}
                    height={60}
                    className="img-fluid"
                    src="/images/blog_details/next.jpg"
                    alt=""
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPost;
