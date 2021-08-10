import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  clearAuthError,
  resetPasswordAction,
} from "../../redux/actions/auth.action";
import { toast } from "react-toastify";
import ButtonLoader from "../shared/ButtonLoader";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = router.query;

  const { error, message, loading } = useSelector((state) => state.reset);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }
    if (message) {
      toast.success(message);
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, message]);

  const handleSubmitReset = (e) => {
    e.preventDefault();

    dispatch(
      resetPasswordAction(
        {
          password,
          confirmPassword,
        },
        token
      )
    );
  };
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="login_form_inner password-form">
              <h3>New Password</h3>
              <form
                className="row login_form"
                id="contactForm"
                onSubmit={handleSubmitReset}
              >
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="new-password"
                    name="password"
                    placeholder="Create new password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="col-md-12 form-group">
                  <button
                    type="submit"
                    value="submit"
                    className="primary-btn"
                    disabled={loading ? true : false}
                  >
                    {loading ? <ButtonLoader /> : "Change"}
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
