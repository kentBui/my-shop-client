import React, { useState } from "react";
import Link from "next/link";

const ReturningCustomer = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmitReturningCustomer = (e) => {
    e.preventDefault();
  };
  return (
    <div className="returning_customer">
      <div className="check_title">
        <h2>
          Returning Customer? &nbsp;
          <Link href="/login">
            <a>Click here to login</a>
          </Link>
        </h2>
      </div>
      <p>
        If you have shopped with us before, please enter your details in the
        boxes below. If you are a new customer, please proceed to the Billing
        &amp; Shipping section.
      </p>
      <form
        className="row contact_form"
        onSubmit={handleSubmitReturningCustomer}
      >
        <div className="col-md-6 form-group p_star">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span
            className="placeholder"
            data-placeholder="Username or Email"
          ></span>
        </div>
        <div className="col-md-6 form-group p_star">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="placeholder" data-placeholder="Password"></span>
        </div>
        <div className="col-md-12 form-group">
          <button type="submit" value="submit" className="primary-btn">
            login
          </button>
          <div className="creat_account">
            <input
              type="checkbox"
              id="f-option"
              name="selector"
              value={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="f-option">Remember me</label>
          </div>
          <Link href="/forgot-password">
            <a className="lost_pass">Lost your password?</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ReturningCustomer;
