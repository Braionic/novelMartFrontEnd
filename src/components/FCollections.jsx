import React from "react";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import blogIm from "../images/wish.svg";
import compare from "../images/compare.svg";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
export default function FCards() {
  return (
    <div className="collection-cards-container col-xs-8 col-sm-5 col-md-3 p-2">
      <div className="collectionCard position-relative my-2 shadow-sm h-25 ">
        <div className="card-image rounded-top overflow-hidden " >
          <img
            src={watch}
            className="img-fluid object-fit-contain"
            alt="blogimg"
          />
          <img
            src={watch2}
            className="img-fluid object-fit-contain"
            alt="blogimg"
          />
        </div>

        <div className="collection-container ps-3 pe-3 pt-5 pb-3">
          <p
            className="date"
            style={{
              color: "orange",
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: 1.2,
            }}
          >
            24 March 2024
          </p>
          <h6 className="mb-0">
            Kids Headphone bulk 10 pack multi colored for students
          </h6>
          <ReactStars
            count={5}
            //onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />
          <p className="fs-6 mt-0">$100.00</p>
        </div>
        <div className="action-bar">
          <div>
            <img src={blogIm} className="img-fluid" />
          </div>
          <div>
            <img src={compare} className="img-fluid" />
          </div>
          <div>
            <img src={blogIm} />
          </div>
        </div>
      </div>
    </div>
  );
}
