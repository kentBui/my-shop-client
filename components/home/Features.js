import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="features-area section_gap">
      <div className="container">
        <div className="row features-inner">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <Image
                  width={31}
                  height={29}
                  src="/images/home/f-icon1.webp"
                  alt=""
                />
              </div>
              <h6>Free Delivery</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <Image
                  width={31}
                  height={29}
                  src="/images/home/f-icon2.webp"
                  alt=""
                />
              </div>
              <h6>Return Policy</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <Image
                  width={31}
                  height={29}
                  src="/images/home/f-icon3.webp"
                  alt=""
                />
              </div>
              <h6>24/7 Support</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
              <div className="f-icon">
                <Image
                  width={31}
                  height={29}
                  src="/images/home/f-icon4.webp"
                  alt=""
                />
              </div>
              <h6>Secure Payment</h6>
              <p>Free Shipping on all order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
