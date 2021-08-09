import Image from "next/image";
import React from "react";

const TablesArea = () => {
  return (
    <div className="section-top-border">
      <h3 className="mb-30">Table</h3>
      <div className="progress-table-wrap">
        <div className="progress-table">
          <div className="table-head">
            <div className="serial">#</div>
            <div className="country">Countries</div>
            <div className="visit">Visits</div>
            <div className="percentage">Percentages</div>
          </div>
          <div className="table-row">
            <div className="serial">01</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f1.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-1"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="serial">02</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f2.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-2"
                  role="progressbar"
                  style={{ width: "30%" }}
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="serial">03</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f3.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-3"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="serial">04</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f4.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-4"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="serial">05</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f5.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-5"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="serial">06</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f6.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-6"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="serial">07</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f7.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-7"
                  role="progressbar"
                  style={{ width: "30%" }}
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="serial">08</div>
            <div className="country">
              <div className="fix-img">
                <Image
                  width={50}
                  height={30}
                  src="/images/element/f8.jpg"
                  alt="flag"
                />
              </div>
              Canada
            </div>
            <div className="visit">645032</div>
            <div className="percentage">
              <div className="progress">
                <div
                  className="progress-bar color-8"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablesArea;
