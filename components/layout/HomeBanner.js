import React, { useEffect } from "react";
import Image from "next/image";
import CustomSlide from "../shared/CustomSlide";
import useWindowSize from "../../hooks/useWindowSize";

const HomeBanner = () => {
  const { width, height } = useWindowSize();
  console.log(width, height);
  return (
    <section className="banner-area">
      <div className="container">
        <div
          className="row fullscreen align-items-center justify-content-start"
          style={{ height }}
        >
          <div className="col-lg-12">
            <CustomSlide label="home-banner">
              <div className="row single-slide d-flex align-items-center">
                <div className="col-lg-5">
                  <div className="banner-content">
                    <h1>
                      Nike New <br />
                      Collection!
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                    <div className="add-bag d-flex align-items-center">
                      <button
                        className="add-btn"
                        href="https://preview.colorlib.com/theme/karma/index.html"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                      <span className="add-text text-uppercase">
                        Add to Bag
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    <Image
                      className="img-fluid"
                      src="/images/home/banner-img.webp"
                      alt=""
                      width={530}
                      height={318}
                    />
                  </div>
                </div>
              </div>

              <div className="row single-slide d-flex align-items-center">
                <div className="col-lg-5">
                  <div className="banner-content">
                    <h1>
                      Nike New <br />
                      Collection!
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation.
                    </p>
                    <div className="add-bag d-flex align-items-center">
                      <a
                        className="add-btn"
                        href="https://preview.colorlib.com/theme/karma/index.html"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </a>
                      <span className="add-text text-uppercase">
                        Add to Bag
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-img">
                    <Image
                      className="img-fluid"
                      src="/images/home/banner-img.webp"
                      alt=""
                      width={530}
                      height={318}
                    />
                  </div>
                </div>
              </div>
            </CustomSlide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
