import Image from "next/image";
import React from "react";

const CommentsArea = () => {
  return (
    <div className="comments-area">
      <h4>05 Comments</h4>
      <div className="comment-list">
        <div className="single-comment justify-content-between d-flex">
          <div className="user justify-content-between d-flex">
            <div className="thumb">
              <Image
                width={60}
                height={60}
                src="/images/blog_details/c1.jpg"
                alt=""
              />
            </div>
            <div className="desc">
              <h5>
                <a href="https://preview.colorlib.com/theme/karma/single-blog.html#">
                  Emilly Blunt
                </a>
              </h5>
              <p className="date">December 4, 2018 at 3:12 pm</p>
              <p className="comment">Never say goodbye till the end comes!</p>
            </div>
          </div>
          <div className="reply-btn">
            <a
              href="https://preview.colorlib.com/theme/karma/single-blog.html"
              className="btn-reply text-uppercase"
            >
              reply
            </a>
          </div>
        </div>
      </div>
      <div className="comment-list left-padding">
        <div className="single-comment justify-content-between d-flex">
          <div className="user justify-content-between d-flex">
            <div className="thumb">
              <Image
                width={60}
                height={60}
                src="/images/blog_details/c2.jpg"
                alt=""
              />
            </div>
            <div className="desc">
              <h5>
                <a href="https://preview.colorlib.com/theme/karma/single-blog.html#">
                  Elsie Cunningham
                </a>
              </h5>
              <p className="date">December 4, 2018 at 3:12 pm</p>
              <p className="comment">Never say goodbye till the end comes!</p>
            </div>
          </div>
          <div className="reply-btn">
            <a
              href="https://preview.colorlib.com/theme/karma/single-blog.html"
              className="btn-reply text-uppercase"
            >
              reply
            </a>
          </div>
        </div>
      </div>
      <div className="comment-list left-padding">
        <div className="single-comment justify-content-between d-flex">
          <div className="user justify-content-between d-flex">
            <div className="thumb">
              <Image
                width={60}
                height={60}
                src="/images/blog_details/c3.jpg"
                alt=""
              />
            </div>
            <div className="desc">
              <h5>
                <a href="https://preview.colorlib.com/theme/karma/single-blog.html#">
                  Annie Stephens
                </a>
              </h5>
              <p className="date">December 4, 2018 at 3:12 pm</p>
              <p className="comment">Never say goodbye till the end comes!</p>
            </div>
          </div>
          <div className="reply-btn">
            <a
              href="https://preview.colorlib.com/theme/karma/single-blog.html"
              className="btn-reply text-uppercase"
            >
              reply
            </a>
          </div>
        </div>
      </div>
      <div className="comment-list">
        <div className="single-comment justify-content-between d-flex">
          <div className="user justify-content-between d-flex">
            <div className="thumb">
              <Image
                width={60}
                height={60}
                src="/images/blog_details/c4.jpg"
                alt=""
              />
            </div>
            <div className="desc">
              <h5>
                <a href="https://preview.colorlib.com/theme/karma/single-blog.html#">
                  Maria Luna
                </a>
              </h5>
              <p className="date">December 4, 2018 at 3:12 pm</p>
              <p className="comment">Never say goodbye till the end comes!</p>
            </div>
          </div>
          <div className="reply-btn">
            <a
              href="https://preview.colorlib.com/theme/karma/single-blog.html"
              className="btn-reply text-uppercase"
            >
              reply
            </a>
          </div>
        </div>
      </div>
      <div className="comment-list">
        <div className="single-comment justify-content-between d-flex">
          <div className="user justify-content-between d-flex">
            <div className="thumb">
              <Image
                width={60}
                height={60}
                src="/images/blog_details/c5.jpg"
                alt=""
              />
            </div>
            <div className="desc">
              <h5>
                <a href="https://preview.colorlib.com/theme/karma/single-blog.html#">
                  Ina Hayes
                </a>
              </h5>
              <p className="date">December 4, 2018 at 3:12 pm</p>
              <p className="comment">Never say goodbye till the end comes!</p>
            </div>
          </div>
          <div className="reply-btn">
            <a
              href="https://preview.colorlib.com/theme/karma/single-blog.html"
              className="btn-reply text-uppercase"
            >
              reply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsArea;
