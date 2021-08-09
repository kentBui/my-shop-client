import Image from "next/image";
import React from "react";
import NewReview from "./NewReview";

const ProductComments = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="row total_rate">
            <div className="col-6">
              <div className="box_total">
                <h5>Overall</h5>
                <h4>4.0</h4>
                <h6>(03 Reviews)</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="rating_list">
                <h3>Based on 3 Reviews</h3>
                <ul className="list">
                  <li>
                    <a>
                      5 Star <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> 01
                    </a>
                  </li>
                  <li>
                    <a>
                      4 Star <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> 01
                    </a>
                  </li>
                  <li>
                    <a>
                      3 Star <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> 01
                    </a>
                  </li>
                  <li>
                    <a>
                      2 Star <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> 01
                    </a>
                  </li>
                  <li>
                    <a>
                      1 Star <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i> 01
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="review_list">
            <div className="review_item">
              <div className="media">
                <div className="d-flex">
                  <Image
                    width={70}
                    height={71}
                    src="/images/product_details/review-1.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h4>Blake Ruiz</h4>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
            </div>
            <div className="review_item">
              <div className="media">
                <div className="d-flex">
                  <Image
                    width={70}
                    height={71}
                    src="/images/product_details/review-2.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h4>Blake Ruiz</h4>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
            </div>
            <div className="review_item">
              <div className="media">
                <div className="d-flex">
                  <Image
                    width={70}
                    height={71}
                    src="/images/product_details/review-3.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <h4>Blake Ruiz</h4>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <NewReview />
        </div>
      </div>
    </>
  );
};

export default ProductComments;
