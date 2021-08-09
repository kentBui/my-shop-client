import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { signleBlog } from "../../../dummyData/blogs";

const SinglePost = () => {
  const router = useRouter();
  const { tag } = router.query;

  const {
    feature,
    name,
    tags,
    images,
    desc,
    postedBy,
    createAt,
    views,
    comments,
  } = signleBlog;
  const timeAgo = formatDistanceToNow(createAt);
  return (
    <div className="single-post row">
      <div className="col-lg-12">
        <div className="feature-img">
          <Image
            width={750}
            height={350}
            className="img-fluid"
            src={feature.public_url}
            alt={name}
          />
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="text-right blog_info">
          <div className="post_tag">
            {tags &&
              tags.map((_tag) => (
                <Link key={_tag.id} href={`/blogs?tag=${_tag.slug}`}>
                  <a>{_tag.name} | </a>
                </Link>
              ))}
          </div>
          <ul className="blog_meta list">
            <li>
              <Link href={`/blogs?author=${postedBy}`}>
                <a>
                  {postedBy}
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/blogs?createAt[gt]=${createAt}`}>
                <a>
                  {timeAgo} ago
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/blogs?views[gt]=${views}`}>
                <a>
                  {views} Views
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/blogs?comments[gt]=${comments}`}>
                <a>
                  {comments} Comments
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="https://facebook.com">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://behance.net">
                <i className="fa fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-9 col-md-9 blog_details">
        <h2>{name}</h2>
        <p className="excert">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction.
        </p>
        <p>
          Boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get the MCSE study materials yourself at a fraction of the camp
          price. However, who has the willpower to actually sit through a
          self-imposed MCSE training. who has the willpower to actually sit
          through a self-imposed
        </p>
        <p>
          Boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get the MCSE study materials yourself at a fraction of the camp
          price. However, who has the willpower to actually sit through a
          self-imposed MCSE training. who has the willpower to actually sit
          through a self-imposed
        </p>
      </div>
      <div className="col-lg-12">
        <div className="quotes">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training.
        </div>
        <div className="row">
          <div className="col-6">
            <Image
              width={360}
              height={350}
              className="img-fluid"
              src="/images/blog_details/post-img1.jpg"
              alt=""
            />
          </div>
          <div className="col-6">
            <Image
              width={360}
              height={350}
              className="img-fluid"
              src="/images/blog_details/post-img2.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-12 mt-25">
            <p>
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower.
            </p>
            <p>
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
