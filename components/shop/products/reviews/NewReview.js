import React from "react";

const NewReview = () => {
  return (
    <div className="review_box">
      <h4>Add a Review</h4>
      <p>Your Rating:</p>
      <ul className="list">
        <li>
          <a>
            <i className="fa fa-star"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-star"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-star"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-star"></i>
          </a>
        </li>
        <li>
          <a>
            <i className="fa fa-star"></i>
          </a>
        </li>
      </ul>
      <p>Outstanding</p>
      <form
        className="row contact_form"
        action="https://preview.colorlib.com/theme/karma/contact_process.php"
        method="post"
        id="contactForm"
        noValidate="novalidate"
      >
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your Full name"
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
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              placeholder="Phone Number"
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
              placeholder="Review"
            ></textarea>
          </div>
        </div>
        <div className="col-md-12 text-right">
          <button type="submit" value="submit" className="primary-btn">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReview;
