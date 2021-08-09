import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import CustomSlideDetails from "../../shared/CustomSlideDetails";

const ProductImage = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product_image_area">
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="s_Product_carousel">
              <CustomSlideDetails>
                <div className="single-prd-item">
                  <Image
                    width={555}
                    height={600}
                    className="img-fluid"
                    src="/images/product_details/s-p1.jpg"
                    alt=""
                  />
                </div>

                <div className="single-prd-item">
                  <Image
                    width={555}
                    height={600}
                    className="img-fluid"
                    src="/images/product_details/s-p1.jpg"
                    alt=""
                  />
                </div>

                <div className="single-prd-item">
                  <Image
                    width={555}
                    height={600}
                    className="img-fluid"
                    src="/images/product_details/s-p1.jpg"
                    alt=""
                  />
                </div>

                <div className="single-prd-item">
                  <Image
                    width={555}
                    height={600}
                    className="img-fluid"
                    src="/images/product_details/s-p1.jpg"
                    alt=""
                  />
                </div>
              </CustomSlideDetails>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <ul className="list">
                <li>
                  <Link href="/products/category">
                    <a className="active">
                      <span>Category</span> : Household
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/stock">
                    <a>
                      <span>Availibility</span> : In Stock
                    </a>
                  </Link>
                </li>
              </ul>
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <div className="product_count">
                <label htmlFor="qty">Quantity:</label>
                <input
                  type="text"
                  name="qty"
                  id="sst"
                  maxLength="12"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  title="Quantity:"
                  className="input-text qty"
                />
                <button className="increase items-count" type="button">
                  <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </button>
                <button className="reduced items-count" type="button">
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
              </div>
              <div className="card_area d-flex align-items-center">
                <button className="primary-btn btn">Add to Cart</button>
                <button className=" btn icon_btn">
                  <i className="fa fa-diamond" aria-hidden="true"></i>
                </button>
                <button className="btn icon_btn">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
