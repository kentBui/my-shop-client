import React from "react";
import { useTimeLeft } from "../../../hooks/useTimeLeft";

const ExclusiveClock = () => {
  const timeLeft = useTimeLeft();

  const { seconds, minutes, hours, days } = timeLeft;
  const displaySeconds = ("0" + seconds).slice(-2);
  const displayMinutes = ("0" + minutes).slice(-2);
  const displayHours = ("0" + hours).slice(-2);
  return (
    <>
      <div className="row clock_sec clockdiv" id="clockdiv">
        <div className="col-lg-12">
          <h2>Exclusive Hot Deal Ends Soon!</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="col-lg-12">
          <div className="row clock-wrap">
            <div className="col clockinner1 clockinner">
              <h3 className="days">{days}</h3>
              <span className="smalltext">Days</span>
            </div>
            <div className="col clockinner clockinner1">
              <h3 className="hours">{displayHours}</h3>
              <span className="smalltext">Hours</span>
            </div>
            <div className="col clockinner clockinner1">
              <h3 className="minutes">{displayMinutes}</h3>
              <span className="smalltext">Mins</span>
            </div>
            <div className="col clockinner clockinner1">
              <h3 className="seconds">{displaySeconds}</h3>
              <span className="smalltext">Secs</span>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://preview.colorlib.com/theme/karma/index.html"
        className="primary-btn"
      >
        Shop Now
      </a>
    </>
  );
};

export default ExclusiveClock;
