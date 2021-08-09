import React from "react";

const FormElements = () => {
  return (
    <div className="section-top-border">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <h3 className="mb-30">Form Element</h3>
          <form>
            <div className="mt-3">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required=""
                className="single-input"
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required=""
                className="single-input"
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required=""
                className="single-input"
              />
            </div>
            <div className="mt-3">
              <input
                type="email"
                name="EMAIL"
                placeholder="Email address"
                required=""
                className="single-input"
              />
            </div>
            <div className="input-group mt-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                </span>
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required=""
                className="form-control"
              />
            </div>
            <div className="input-group mt-2">
              <div className="input-group-prepend">
                <div className="btn btn-outline-dark">
                  <i className="fa fa-plane" aria-hidden="true"></i>
                </div>
              </div>
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input-group mt-2">
              <div className="input-group-prepend">
                <div className="btn btn-outline-secondary">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </div>
              </div>
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mt-3">
              <textarea
                className="single-textarea"
                placeholder="Message"
                required=""
              ></textarea>
            </div>

            <div className="mt-3">
              <input
                type="text"
                name="first_name"
                placeholder="Primary color"
                required=""
                className="single-input-primary"
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="first_name"
                placeholder="Accent color"
                required=""
                className="single-input-accent"
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="first_name"
                placeholder="Secondary color"
                required=""
                className="single-input-secondary"
              />
            </div>
          </form>
        </div>
        <div className="col-lg-3 col-md-4 mt-sm-30">
          <div className="single-element-widget">
            <h3 className="mb-30">Switches</h3>
            <div className="switch-wrap d-flex justify-content-between">
              <p>01. Sample Switch</p>
              <div className="primary-switch">
                <input type="checkbox" id="default-switch" />
                <label htmlFor="default-switch"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>02. Primary Color Switch</p>
              <div className="primary-switch">
                <input type="checkbox" id="primary-switch" />
                <label htmlFor="primary-switch"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>03. Confirm Color Switch</p>
              <div className="confirm-switch">
                <input type="checkbox" id="confirm-switch" />
                <label htmlFor="confirm-switch"></label>
              </div>
            </div>
          </div>
          <div className="single-element-widget mt-30">
            <h3 className="mb-30">Selectboxes</h3>
          </div>
          <div className="single-element-widget mt-30">
            <h3 className="mb-30">Checkboxes</h3>
            <div className="switch-wrap d-flex justify-content-between">
              <p>01. Sample Checkbox</p>
              <div className="primary-checkbox">
                <input type="checkbox" id="default-checkbox" />
                <label htmlFor="default-checkbox"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>02. Primary Color Checkbox</p>
              <div className="primary-checkbox">
                <input type="checkbox" id="primary-checkbox" />
                <label htmlFor="primary-checkbox"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>03. Confirm Color Checkbox</p>
              <div className="confirm-checkbox">
                <input type="checkbox" id="confirm-checkbox" />
                <label htmlFor="confirm-checkbox"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>04. Disabled Checkbox</p>
              <div className="disabled-checkbox">
                <input type="checkbox" id="disabled-checkbox" />
                <label htmlFor="disabled-checkbox"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>05. Disabled Checkbox active</p>
              <div className="disabled-checkbox">
                <input
                  type="checkbox"
                  id="disabled-checkbox-active"
                  disabled=""
                />
                <label htmlFor="disabled-checkbox-active"></label>
              </div>
            </div>
          </div>
          <div className="single-element-widget mt-30">
            <h3 className="mb-30">Radios</h3>
            <div className="switch-wrap d-flex justify-content-between">
              <p>01. Sample radio</p>
              <div className="primary-radio">
                <input type="checkbox" id="default-radio" />
                <label htmlFor="default-radio"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>02. Primary Color radio</p>
              <div className="primary-radio">
                <input type="checkbox" id="primary-radio" />
                <label htmlFor="primary-radio"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>03. Confirm Color radio</p>
              <div className="confirm-radio">
                <input type="checkbox" id="confirm-radio" />
                <label htmlFor="confirm-radio"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>04. Disabled radio</p>
              <div className="disabled-radio">
                <input type="checkbox" id="disabled-radio" />
                <label htmlFor="disabled-radio"></label>
              </div>
            </div>
            <div className="switch-wrap d-flex justify-content-between">
              <p>05. Disabled radio active</p>
              <div className="disabled-radio">
                <input type="checkbox" id="disabled-radio-active" />
                <label htmlFor="disabled-radio-active"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormElements;
