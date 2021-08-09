import React from "react";

const CommentForm = () => {
  return (
    <div className="comment-form">
      <h4>Leave a Reply</h4>
      <form>
        <div className="form-group form-inline">
          <div className="form-group col-lg-6 col-md-6 name">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group col-lg-6 col-md-6 email">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email address"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            className="mb-10 form-control"
            rows="5"
            name="message"
            placeholder="Messege"
            required=""
          ></textarea>
        </div>
        <a
          href="https://preview.colorlib.com/theme/karma/single-blog.html#"
          className="primary-btn submit_btn"
        >
          Post Comment
        </a>
      </form>
    </div>
  );
};

export default CommentForm;
