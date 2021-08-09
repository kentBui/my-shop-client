import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleNewsLetter = () => {};
  return (
    <aside className="single-sidebar-widget newsletter_widget">
      <h4 className="widget_title">Newsletter</h4>
      <p>
        Here, I focus on a range of items and features that we use in life
        without giving them a second thought.
      </p>
      <div className="flex-row form-group d-flex">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroup"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn bbtns" onClick={handleNewsLetter}>
          Subcribe
        </button>
      </div>
      <p className="text-bottom">You can unsubscribe at any time</p>
      <div className="br"></div>
    </aside>
  );
};

export default NewsLetter;
