import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/client";
import { toast } from "react-toastify";
import ButtonLoader from "../shared/ButtonLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmitSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(result);

    if (result.error) {
      toast.error(result.error);
      setLoading(false);
    } else {
      setLoading(false);
      window.location.href = "/";
    }
  };
  return (
    <section className="login_box_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login_box_img ">
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
                <Link href="/register">
                  <a className="primary-btn">Create an Account</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login_form_inner">
              <h3>Log in to enter</h3>
              <form
                className="row login_form"
                id="contactForm"
                onSubmit={handleSubmitSignin}
              >
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
                {/* <div className="col-md-12 form-group">
                  <div className="creat_account">
                    <input type="checkbox" id="f-option2" name="selector" />
                    <label htmlFor="f-option2">Keep me logged in</label>
                  </div>
                </div> */}
                <div className="col-md-12 form-group">
                  <button
                    type="submit"
                    value="submit"
                    disabled={loading ? true : false}
                    className="btn primary-btn d-flex justify-content-center align-items-center"
                  >
                    {loading ? <ButtonLoader /> : <div>Login</div>}
                  </button>

                  <Link href="/password/forgot-password">
                    <a>Forgot Password?</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
