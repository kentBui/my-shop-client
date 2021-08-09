import Image from "next/image";
import React from "react";

const AdsWidget = () => {
  return (
    <aside className="single_sidebar_widget ads_widget">
      <a href="https://google.com">
        <Image
          width={300}
          height={250}
          className="img-fluid"
          src="/images/blog/add.jpg"
          alt=""
        />
      </a>
      <div className="br"></div>
    </aside>
  );
};

export default AdsWidget;
