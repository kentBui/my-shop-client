import Image from "next/image";
import React from "react";
import NewComment from "./NewComment";

const ProductComments = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="comment_list">
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
                <h5>12th Feb, 2018 at 05:56 pm</h5>
                <button className="btn reply_btn">Reply</button>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>
          <div className="review_item reply">
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
                <h5>12th Feb, 2018 at 05:56 pm</h5>
                <button className="btn reply_btn">Reply</button>
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
                <h5>12th Feb, 2018 at 05:56 pm</h5>
                <button className="btn reply_btn">Reply</button>
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
        <NewComment />
      </div>
    </div>
  );
};

export default ProductComments;
