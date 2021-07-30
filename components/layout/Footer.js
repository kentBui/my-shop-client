import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="footer-area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>About Us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div className="" id="mc_embed_signup">
                <form className="form-inline">
                  <div className="flex-row d-flex">
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Enter Email"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />

                    <button className="click-btn btn btn-default">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </button>
                    {/* <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex="-1"
                        value={""}
                        type="text"
                      />
                    </div> */}
                  </div>
                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Instragram Feed</h6>
              <ul className="flex-wrap instafeed d-flex">
                <li>
                  <Image
                    src="/images/login/i1.jpg"
                    alt=""
                    width={58}
                    height={58}
                  />
                </li>
                <li>
                  <Image
                    src="/images/login/i2.jpg"
                    alt=""
                    width={58}
                    height={58}
                  />
                </li>
                <li>
                  <Image
                    width={58}
                    height={58}
                    src="/images/login/i3.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    width={58}
                    height={58}
                    src="/images/login/i4.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    width={58}
                    height={58}
                    src="/images/login/i5.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    width={58}
                    height={58}
                    src="/images/login/i6.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    width={58}
                    height={58}
                    src="/images/login/i7.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <Image
                    width={58}
                    height={58}
                    src="/images/login/i8.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="footer-social d-flex align-items-center">
                <Link href="/">
                  <a>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-wrap footer-bottom d-flex justify-content-center align-items-center">
          <p className="m-0 footer-text">
            Copyright © 2021 All rights reserved | This template is made with{" "}
            <span>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </span>{" "}
            by
            <Link href="https://colorlib.com/">
              <a target="_blank"> Colorlib</a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
