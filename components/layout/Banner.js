import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Banner = ({ title }) => {
  const router = useRouter();

  return (
    <section className="banner-area organic-breadcrumb">
      <div className="container">
        <div
          className="
            breadcrumb-banner
            d-flex
            flex-wrap
            align-items-center
            justify-content-end
          "
        >
          <div className="col-first">
            <h1 className="text-uppercase">{title}</h1>
            <nav className="d-flex align-items-center">
              <Link href="/">
                <a>
                  Home
                  <span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </span>
                </a>
              </Link>
              <Link href={`${router.pathname}`}>
                <a className="text-capitalize">
                  {router.pathname.split("/").join(` `)}
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
