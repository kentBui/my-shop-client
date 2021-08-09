import Image from "next/image";
import React from "react";
import AdsWidget from "./AdsWidget";
import AuthorWidget from "./AuthorWidget";
import CategoryWidget from "./CategoryWidget";
import NewsLetter from "./NewsLetter";
import PopularPostWidget from "./PopularPostWidget";
import SearchWidget from "./SearchWidget";
import TagsWidget from "./TagsWidget";

const BlogSideBar = () => {
  return (
    <div className="blog_right_sidebar">
      <SearchWidget />
      <AuthorWidget />
      <PopularPostWidget />
      <AdsWidget />
      <CategoryWidget />
      <NewsLetter />
      <TagsWidget />
    </div>
  );
};

export default BlogSideBar;
