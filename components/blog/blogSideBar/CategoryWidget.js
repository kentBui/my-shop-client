import Link from "next/link";
import React from "react";
import { categories } from "../../../dummyData/categories";

const CategoryWidget = () => {
  // api return categories and count blogs per category

  return (
    <aside className="single_sidebar_widget post_category_widget">
      <h4 className="widget_title">Post Catgories</h4>
      <ul className="list cat-list">
        {categories &&
          categories.map((cate) => (
            <li key={cate.id}>
              <Link href={`/blogs?category=${cate.slug}`}>
                <a className="d-flex justify-content-between">
                  <p>{cate.name}</p>
                  <p>{cate.numsOfBlogs}</p>
                </a>
              </Link>
            </li>
          ))}
      </ul>
      <div className="br"></div>
    </aside>
  );
};

export default CategoryWidget;
