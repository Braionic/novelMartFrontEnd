import React from "react";

export default function PromoCode() {
  return (
    <div className="form-group mb-3 ">
      <fieldset className="the-fieldset border border-2  rounded-3 p-2 bg-light">
        <legend className="the-legend float-none w-auto px-3 mb-0 fs-6 fw-bold  ">
          Promo Code
        </legend>
        <div className="d-flex align-align-items-center px-1 pb-1 gap-2">
          <input
            type="text"
            placeholder="Add a promo code"
            className="form-control h-25 rounded-start-5 font-14"
          />
          <button className="btn btn-xs btn-success font-14 rounded-5 py-1 px-2 ">
            Apply
          </button>
        </div>
      </fieldset>
    </div>
  );
}
