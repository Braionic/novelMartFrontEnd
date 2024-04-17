import React from "react";
import watch2 from "../images/watch2.jpg";

export default function CheckoutProductComponent() {
  return (
    <div className="checkout-item d-flex align-items-center gap-2 mb-2">
      <div className="product-img w-25 rounded position-relative ">
        <img src={watch2} className="img-fluid" alt="watch" />
        <span
          className="position-absolute badge rounded-circle  text-white  p-2 bg-secondary "
          style={{ top: -10, right: 0 }}
        >
          1
        </span>
      </div>
      <div className="product-content">
        <p className="mb-0 font-14">
          Honor T1 7.0GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet
        </p>
        <p className="text-secondary text font-14">s/ #AB5A5S</p>
      </div>
      <div className="product-price">
        <p>$100.000</p>
      </div>
    </div>
  );
}
