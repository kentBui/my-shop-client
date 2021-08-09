import Image from "next/image";
import React from "react";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="login_form_inner password-form">
              <h3>Forgot Password</h3>
              <form className="row login_form" id="contactForm">
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="col-md-12 form-group">
                  <button type="submit" value="submit" className="primary-btn">
                    Continue
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

export default ForgotPassword;
