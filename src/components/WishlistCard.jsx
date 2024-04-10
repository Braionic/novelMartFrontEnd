import React from "react";
import watch2 from "../images/watch.jpg";
import { LiaTimesSolid } from "react-icons/lia";
export default function WishlistCard() {
  return (
    <div className="col-lg-3 position-relative">
      <div className="compare-image bg-white rounded overflow-hidden ">
        <img src={watch2} alt="product" className="image-fluid w-full " />
      </div>
      <div className="compare-contents p-2 d-flex flex-column align-items-between">
        <h6 className="fs-6">
          Beoplay A1 Portable Bloothooth Speaker With Microphone
        </h6>
        <div>
          <span className="text-danger">$500.00</span>
          <span className="text-secondary">$670.00</span>
        </div>
        <div className="position-absolute" style={{right: "20px", top: 3, cursor: "pointer"}}>    
        <LiaTimesSolid />
        </div>
      </div>
    </div>
  );
}
