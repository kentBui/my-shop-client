import Image from "next/image";
import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2">
            <div className="login_box_img">
              <div className="fix-img">
                <Image
                  width={585}
                  height={609}
                  className="img-fluid"
                  src="/images/login/login.jpg"
                  alt=""
                />
              </div>
              <div className="hover">
                <h4>New to our website?</h4>
                <p>
                  There are advances being made in science and technology
                  everyday, and a good example of this is the
                </p>
                <Link href="/login">
                  <a className="primary-btn">Login</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login_form_inner">
              <h3>Create Account</h3>
              <form className="row login_form" id="contactForm">
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="col-md-12 form-group">
                  <button type="submit" value="submit" className="primary-btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
