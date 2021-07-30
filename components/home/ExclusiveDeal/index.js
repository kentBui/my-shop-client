import React from "react";
import ExclusiveClock from "./ExclusiveClock";
import ExclusiveSlide from "./ExclusiveSlide";

const ExclusiveDeal = () => {
  return (
    <section className="exclusive-deal-area">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 no-padding exclusive-left">
            <ExclusiveClock />
          </div>
          <div className="col-lg-6 no-padding exclusive-right">
            <div className="active-exclusive-product-slider">
              <ExclusiveSlide />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeal;
