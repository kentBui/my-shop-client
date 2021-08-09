import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/router";

const BlogAreaItem = ({ blog }) => {
  const timeAgo = formatDistanceToNow(blog.createAt);
  const router = useRouter();

  const { tag } = router.query;

  return (
    <article className="row blog_item">
      <div className="col-md-3">
        <div className="text-right blog_info">
          <div className="post_tag">
            {blog.tags &&
              blog.tags.map((_tag) => (
                <Link key={_tag.id} href={`/blogs?tag=${_tag.slug}`}>
                  <a className={tag && tag === _tag.slug ? "active" : ""}>
                    {_tag.name} |{" "}
                  </a>
                </Link>
              ))}
          </div>
          <ul className="blog_meta list">
            <li>
              <Link href={`/blogs?author=${blog.postedBy}`}>
                <a>
                  {blog.postedBy}
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/blogs?createAt[gt]=${blog.createAt}`}>
                <a>
                  {timeAgo} ago
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/blogs?views[gt]=${blog.views}`}>
                <a>
                  {blog.views} Views
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/blogs?comments[gt]=${blog.comments}`}>
                <a>
                  {blog.comments} Comments
                  <i className="fa fa-comment-o" aria-hidden="true"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-9">
        <div className="blog_post">
          <Image
            width={555}
            height={280}
            src={blog.images[0].public_url}
            alt={blog.name}
          />
          <div className="blog_details">
            <Link href={`/blogs/${blog.slug}`}>
              <a>
                <h2>{blog.name}</h2>
              </a>
            </Link>
            <p>{blog.desc}</p>
            <Link href={`/blogs/${blog.slug}`}>
              <a className="white_bg_btn">View More</a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogAreaItem;
