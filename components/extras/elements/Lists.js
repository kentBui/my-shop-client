import React from "react";

const Lists = () => {
  return (
    <div className="section-top-border mt-4">
      <div className="row">
        <div className="col-md-4">
          <h3 className="mb-20">Image Gallery</h3>
          <div className="typography">
            <h1>This is header 01</h1>
            <h2>This is header 02</h2>
            <h3>This is header 03</h3>
            <h4>This is header 04</h4>
            <h5>This is header 01</h5>
            <h6>This is header 01</h6>
          </div>
        </div>
        <div className="col-md-4 mt-sm-30">
          <h3 className="mb-20">Unordered List</h3>
          <div className="">
            <ul className="unordered-list">
              <li>Fta Keys</li>
              <li>For Women Only Your Computer Usage</li>
              <li>
                Facts Why Inkjet Printing Is Very Appealing
                <ul>
                  <li>
                    Addiction When Gambling Becomes
                    <ul>
                      <li>Protective Preventative Maintenance</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Dealing With Technical Support 10 Useful Tips</li>
              <li>Make Myspace Your Best Designed Space</li>
              <li>Cleaning And Organizing Your Computer</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mt-sm-30">
          <h3 className="mb-20">Ordered List</h3>
          <div className="">
            <ol className="ordered-list">
              <li>
                <span>Fta Keys</span>
              </li>
              <li>
                <span>For Women Only Your Computer Usage</span>
              </li>
              <li>
                <span>Facts Why Inkjet Printing Is Very Appealing</span>
                <ol className="ordered-list-alpha">
                  <li>
                    <span>Addiction When Gambling Becomes</span>
                    <ol className="ordered-list-roman">
                      <li>
                        <span>Protective Preventative Maintenance</span>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <span>Dealing With Technical Support 10 Useful Tips</span>
              </li>
              <li>
                <span>Make Myspace Your Best Designed Space</span>
              </li>
              <li>
                <span>Cleaning And Organizing Your Computer</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
