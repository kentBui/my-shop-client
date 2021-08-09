import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCategory = () => {
  return (
    <section className="blog_categorie_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="categories_post">
              <Image
                width={360}
                height={220}
                src="/images/blog/cat-post-3.jpg"
                alt="post"
              />
              <div className="categories_details">
                <div className="categories_text">
                  <Link href="/blogs?category=social">
                    <a>
                      <h5>Social Life</h5>
                    </a>
                  </Link>
                  <div className="border_line"></div>
                  <p>Enjoy your social life together</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="categories_post">
              <Image
                width={360}
                height={220}
                src="/images/blog/cat-post-2.jpg"
                alt="post"
              />
              <div className="categories_details">
                <div className="categories_text">
                  <Link href="/blogs?category=politic">
                    <a>
                      <h5>Politics</h5>
                    </a>
                  </Link>
                  <div className="border_line"></div>
                  <p>Be a part of politics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="categories_post">
              <Image
                width={360}
                height={220}
                src="/images/blog/cat-post-1.jpg"
                alt="post"
              />
              <div className="categories_details">
                <div className="categories_text">
                  <Link href="/blogs?category=food">
                    <a>
                      <h5>Food</h5>
                    </a>
                  </Link>
                  <div className="border_line"></div>
                  <p>Let the food be finished</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
