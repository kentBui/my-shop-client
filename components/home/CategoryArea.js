import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryArea = () => {
  return (
    <section className="category-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <div className="single-deal-img">
                    <Image
                      width={458}
                      height={184}
                      className="img-fluid w-100"
                      src="/images/home/c1.webp"
                      alt=""
                    />
                  </div>
                  <a
                    href="/images/home/c1.webp"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <div className="single-deal-img">
                    <Image
                      width={262}
                      height={225}
                      className="img-fluid w-100"
                      src="/images/home/c2.webp"
                      alt=""
                    />
                  </div>
                  <a
                    href="/images/home/c2.webp"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <div className="single-deal-img">
                    <Image
                      width={262}
                      height={225}
                      className="img-fluid w-100"
                      src="/images/home/c3.webp"
                      alt=""
                    />
                  </div>
                  <a
                    href="/images/home/c3.webp"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Product for Couple</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <div className="single-deal">
                  <div className="overlay"></div>
                  <div className="single-deal-img">
                    <Image
                      width={458}
                      height={184}
                      className="img-fluid w-100"
                      src="/images/home/c4.webp"
                      alt=""
                    />
                  </div>
                  <a
                    href="/images/home/c4.webp"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">Sneaker for Sports</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-deal">
              <div className="overlay"></div>
              <div className="single-deal-img">
                <Image
                  width={360}
                  height={425}
                  className="img-fluid w-100"
                  src="/images/home/c5.webp"
                  alt=""
                />
              </div>
              <Link href="/">
                <a className="img-pop-up" target="_blank" rel="noreferrer">
                  <div className="deal-details">
                    <h6 className="deal-title">Sneaker for Sports</h6>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryArea;
