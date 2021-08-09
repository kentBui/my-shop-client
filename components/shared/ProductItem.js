import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ handelProduct }) => {
  const handleProductClick = () => {
    handelProduct("product id");
  };
  return (
    <div className="single-product">
      <Image
        width={262}
        height={280}
        className="img-fluid"
        src="/images/home/p1.webp"
        alt=""
      />
      <div className="product-details">
        <Link href={`/shops/product_id`}>
          <a className="prd_title">addidas New Hammer sole for Sports person</a>
        </Link>
        <div className="price">
          <h6>$150.00</h6>
          <h6 className="l-through">$210.00</h6>
        </div>
        <div className="prd-bottom">
          <button className="social-info">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
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

          <button className="social-info" onClick={handleProductClick}>
            <i className="fa fa-arrows-alt" aria-hidden="true"></i>
            <p className="hover-text">view more</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
