import React from "react";
import CustomSlide from "../../shared/CustomSlide";
import Image from "next/image";
import Link from "next/link";

const ProductsArea = () => {
  return (
    <section className="active-product-area section_gap">
      <CustomSlide label="product">
        {/* slide item 1 coming products  */}
        <div className="single-product-slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center col-lg-6">
                <div className="section-title">
                  <h1>Latest Products</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p1.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p2.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p3.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p4.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p5.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p6.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p7.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p8.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide item 2 lastest products  */}
        <div className="single-product-slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center col-lg-6">
                <div className="section-title">
                  <h1>Coming Products</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p6.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p8.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p3.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p5.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p1.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p4.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p1.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p8.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide item 3 ... products */}
        <div className="single-product-slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center col-lg-6">
                <div className="section-title">
                  <h1>Latest Products</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p1.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p2.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p3.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p4.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p5.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p6.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p7.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p8.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide item 4 ... products */}
        <div className="single-product-slider">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center col-lg-6">
                <div className="section-title">
                  <h1>Coming Products</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p6.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p8.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p3.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p5.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p1.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p4.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p1.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <Image
                    width={262}
                    height={280}
                    className="img-fluid"
                    src="/images/home/p8.webp"
                    alt=""
                  />
                  <div className="product-details">
                    <h6>addidas New Hammer sole for Sports person</h6>
                    <div className="price">
                      <h6>$150.00</h6>
                      <h6 className="l-through">$210.00</h6>
                    </div>
                    <div className="prd-bottom">
                      <button className="social-info">
                        <i
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></i>
                        <p className="hover-text">add to bag</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <p className="hover-text">Wishlist</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <p className="hover-text">compare</p>
                      </button>

                      <button className="social-info">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                        <p className="hover-text">view more</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomSlide>
    </section>
  );
};

export default ProductsArea;
