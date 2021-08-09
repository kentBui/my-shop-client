import React from "react";
import { useState } from "react";

const NewComment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmitComment = (e) => {
    e.preventDefault();
  };
  return (
    <div className="review_box">
      <h4>Post a comment</h4>
      <form
        className="row contact_form"
        id="contactForm"
        onSubmit={handleSubmitComment}
      >
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your Full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="number"
              name="number"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="1"
              placeholder="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="col-md-12 text-right">
          <button type="submit" value="submit" className="btn primary-btn">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewComment;
