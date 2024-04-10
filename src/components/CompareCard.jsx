import React from "react";
import watch2 from "../images/watch.jpg";
import { LiaTimesSolid } from "react-icons/lia";
export default function CompareCard() {
  return (
    <div className="col-lg-3 p-1">
      <div className="position-relative rounded-2 bg-white ">
        <div className="compare-image bg-white rounded overflow-hidden">
          <img src={watch2} className="image-fluid w-100 " />
        </div>
        <div className="compare-contents d-flex flex-column align-items-between p-2">
          <h6 className="fs-6">
            Beoplay A1 Portable Bloothooth Speaker With Microphone
          </h6>
          <div>
            <span className="text-secondary fs-6 ">$500.00</span>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center m-0">
            <p className="fw-bold ">Brand:</p>
            <p>Havels</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center mb-0">
            <p className="fw-bold ">Type:</p>
            <p>Watch</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center mb-0">
            <p className="fw-bold ">Availability:</p>
            <p>In Stock</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center mb-0">
            <p className="fw-bold ">Color:</p>
            <ul className="list-group d-flex flex-row gap-1">
              <li className=" list-group-item bg-danger w-2 h-2 px-2  rounded-circle "></li>
              <li className=" list-group-item bg-danger w-2 h-2 px-2  rounded-circle "></li>
              <li className=" list-group-item bg-danger w-2 h-2 px-2  rounded-circle "></li>
              <li className=" list-group-item bg-danger w-2 h-2 px-2  rounded-circle "></li>
            </ul>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between align-items-center mb-0">
            <p className="fw-bold ">Size:</p>
            <p>S M</p>
          </div>
          <div className="position-absolute" style={{right: "20px", top: 3, cursor: "pointer"}}>    
        <LiaTimesSolid />
        </div>
        </div>
      </div>
      
    </div>
  );
}
