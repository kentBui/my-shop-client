import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthError,
  forgotPasswordAction,
} from "../../redux/actions/auth.action";
import { toast } from "react-toastify";
import ButtonLoader from "../shared/ButtonLoader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { error, message, loading } = useSelector((state) => state.forgot);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }

    if (message) {
      toast.success(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, message]);

  const handleSubmitForgot = (e) => {
    e.preventDefault();

    dispatch(forgotPasswordAction({ email }));
  };
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="login_form_inner password-form">
              <h3>Forgot Password</h3>
              <form
                className="row login_form"
                id="contactForm"
                onSubmit={handleSubmitForgot}
              >
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-md-12 form-group">
                  <button
                    type="submit"
                    value="submit"
                    className="primary-btn"
                    disabled={loading ? true : false}
                  >
                    {loading ? <ButtonLoader /> : "Continue"}
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
