import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthError,
  registerUserAction,
} from "../../redux/actions/auth.action";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import ButtonLoader from "../shared/ButtonLoader";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, success, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }

    if (success) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, success]);

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    dispatch(registerUserAction(user));
  };
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="order-2 col-lg-6">
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
              <form
                className="row login_form"
                id="contactForm"
                onSubmit={handleSubmitRegister}
              >
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-12 form-group">
                  <button
                    type="submit"
                    value="submit"
                    disabled={loading ? true : false}
                    className="btn primary-btn d-flex justify-content-center align-items-center"
                  >
                    {loading ? <ButtonLoader /> : <div>Register</div>}
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
