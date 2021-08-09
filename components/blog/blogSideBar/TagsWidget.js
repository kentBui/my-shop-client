import Link from "next/link";
import React from "react";
import { tags } from "../../../dummyData/tags";

const TagsWidget = () => {
  return (
    <aside className="single-sidebar-widget tag_cloud_widget">
      <h4 className="widget_title">Tag Clouds</h4>
      <ul className="list">
        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <Link href={`/blogs?tag=${tag.slug}`}>
                <a>{tag.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default TagsWidget;
