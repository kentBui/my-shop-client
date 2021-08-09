import React, { useState } from "react";

const CouponArea = () => {
  const [couponCode, setCouponCode] = useState("");
  return (
    <div className="cupon_area">
      <div className="check_title">
        <h2>
          Have a coupon? &nbsp;
          <label htmlFor="coupon-code"> Click here to enter your code</label>
        </h2>
      </div>
      <input
        id="coupon-code"
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button
        className="btn tp_btn"
        href="https://preview.colorlib.com/theme/karma/checkout.html#"
      >
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponArea;
