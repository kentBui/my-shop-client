import Image from "next/image";
import React from "react";

const AuthorWidget = () => {
  return (
    <aside className="single_sidebar_widget author_widget">
      <Image
        width={120}
        height={120}
        className="author_img rounded-circle"
        src="/images/blog/author.png"
        alt=""
      />
      <h4>Charlie Barber</h4>
      <p>Senior blog writer</p>
      <div className="social_icon">
        <a href="https://preview.colorlib.com/theme/karma/blog.html#">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://preview.colorlib.com/theme/karma/blog.html#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://preview.colorlib.com/theme/karma/blog.html#">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://preview.colorlib.com/theme/karma/blog.html#">
          <i className="fa fa-behance"></i>
        </a>
      </div>
      <p>
        Boot camps have its supporters andit sdetractors. Some people do not
        understand why you should have to spend money on boot camp when you can
        get. Boot camps have itssuppor ters andits detractors.
      </p>
      <div className="br"></div>
    </aside>
  );
};

export default AuthorWidget;
