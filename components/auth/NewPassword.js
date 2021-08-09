import Image from "next/image";
import React from "react";
import Link from "next/link";

const NewPassword = () => {
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="login_form_inner password-form">
              <h3>New Password</h3>
              <form className="row login_form" id="contactForm">
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="new-password"
                    name="password"
                    placeholder="Create new password"
                    required
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="new-confirm-password"
                    name="confirmPassword"
                    placeholder="confirm your password"
                    required
                  />
                </div>

                <div className="col-md-12 form-group">
                  <button type="submit" value="submit" className="primary-btn">
                    Change
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

export default NewPassword;
