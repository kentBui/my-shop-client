import React from "react";
import Image from "next/image";
import Link from "next/link";
import RelatedProductItem from "../RelatedProductItem";
import AdsBlackFriday from "../AdsBlackFrinday";

const RelatedProducts = () => {
  return (
    <section className="related-product-area section_gap_bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center col-lg-6">
            <div className="section-title">
              <h1>Deals of the Week</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="mb-20 col-lg-4 col-md-4 col-sm-6">
                <RelatedProductItem />
              </div>
              <div className="mb-20 col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r2.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-20 col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r3.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-20 col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r5.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-20 col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r6.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-20 col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r7.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r9.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r10.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-related-product d-flex">
                  <Link href="/">
                    <a>
                      <Image
                        width={70}
                        height={70}
                        src="/images/home/r11.webp"
                        alt=""
                      />
                    </a>
                  </Link>
                  <div className="desc">
                    <Link href="/">
                      <a className="title">Black lace Heels</a>
                    </Link>
                    <div className="price">
                      <h6>$189.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AdsBlackFriday />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
