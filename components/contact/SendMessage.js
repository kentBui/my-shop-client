import React from "react";

const SendMessage = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="contact_info">
          <div className="info_item">
            <i className="fa fa-home" aria-hidden="true"></i>
            <h6>California, United States</h6>
            <p>Santa monica bullevard</p>
          </div>
          <div className="info_item">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <h6>
              <a href="https://preview.colorlib.com/theme/karma/contact.html#">
                00 (440) 9865 562
              </a>
            </h6>
            <p>Mon to Fri 9am to 6 pm</p>
          </div>
          <div className="info_item">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <h6>
              <a href="https://preview.colorlib.com/theme/karma/contact.html#">
                support@colorlib.com
              </a>
            </h6>
            <p>Send us your query anytime!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <form className="row contact_form" id="contactForm">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                placeholder="Enter Subject"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="1"
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 text-right">
            <button type="submit" value="submit" className="primary-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
