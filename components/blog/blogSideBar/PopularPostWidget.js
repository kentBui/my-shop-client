import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularPostWidget = () => {
  const popularPost = [{}];
  return (
    <aside className="single_sidebar_widget popular_post_widget">
      <h3 className="widget_title">Popular Posts</h3>
      <div className="media post_item">
        <Image
          width={100}
          height={60}
          src="/images/blog/post1.jpg"
          alt="post"
        />
        <div className="media-body">
          <Link href={`/blogs/blog-slug`}>
            <a>
              <h3>Space The Final Frontier</h3>
            </a>
          </Link>
          <p>02 Hours ago</p>
        </div>
      </div>
      <div className="media post_item">
        <Image
          width={100}
          height={60}
          src="/images/blog/post2.jpg"
          alt="post"
        />
        <div className="media-body">
          <Link href={`/blogs/blog-slug`}>
            <a>
              <h3>The Amazing Hubble</h3>
            </a>
          </Link>
          <p>02 Hours ago</p>
        </div>
      </div>
      <div className="media post_item">
        <Image
          width={100}
          height={60}
          src="/images/blog/post3.jpg"
          alt="post"
        />
        <div className="media-body">
          <Link href={`/blogs/blog-slug`}>
            <a>
              <h3>Astronomy Or Astrology</h3>
            </a>
          </Link>
          <p>03 Hours ago</p>
        </div>
      </div>
      <div className="media post_item">
        <Image
          width={100}
          height={60}
          src="/images/blog/post4.jpg"
          alt="post"
        />
        <div className="media-body">
          <Link href={`/blogs/blog-slug`}>
            <a>
              <h3>Asteroids telescope</h3>
            </a>
          </Link>
          <p>01 Hours ago</p>
        </div>
      </div>
      <div className="br"></div>
    </aside>
  );
};

export default PopularPostWidget;
