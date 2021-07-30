import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExclusiveItem = () => {
  return (
    <div className="single-exclusive-slider">
      <Image
        width={440}
        height={400}
        className="img-fluid"
        src="/images/home/e-p1.webp"
        alt=""
      />
      <div className="product-details">
        <div className="price">
          <h6>$150.00</h6>
          <h6 className="l-through">$210.00</h6>
        </div>
        <h4>addidas New Hammer sole for Sports person</h4>
        <div className=" add-bag d-flex align-items-center justify-content-center">
          <button className="add-btn">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>

          <span className="add-text text-uppercase">Add to Bag</span>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveItem;
