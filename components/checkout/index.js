import React from "react";
import BillingDetails from "./BillingDetails";
import CouponArea from "./CouponArea";
import ReturningCustomer from "./ReturningCustomer";
const Checkout = () => {
  return (
    <section className="checkout_area section_gap">
      <div className="container">
        <ReturningCustomer />
        <CouponArea />
        <BillingDetails />
      </div>
    </section>
  );
};

export default Checkout;
