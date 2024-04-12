import React from "react";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import blogIm from "../images/wish.svg";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-stars";
export default function OurstoreCards({ grid }) {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div
      className={`collection-cards-container col-xs-8 col-sm-5 col-md-3  ${
        pathname === "/our-store" ? `gr${grid}` : "col-3"
      }`}
    >
      <div className="collectionCard position-relative shadow-sm bg-white rounded-3 m-1 ">
        <span
          className="bg-warning rounded-pill position-absolute"
          style={{
            fontSize: "11px",
            paddingLeft: "3px",
            paddingRight: "3px",
            left: "10px",
            top: "5px",
          }}
        >
          -16%
        </span>
        <span
          className="bg-warning rounded-pill position-absolute"
          style={{
            fontSize: "11px",
            paddingLeft: "3px",
            paddingRight: "3px",
            right: "10px",
            top: "5px",
          }}
        >
          -16%
        </span>

        <Link to="product/id" className="card-content text-dark ">
          <div className="card-image" style={{ height: "210px" }}>
            <img
              src={watch}
              style={{ objectFit: "contain" }}
              className="img-fluid rounded-top"
              alt="blogimg"
            />
            <img
              src={watch2}
              style={{ objectFit: "contain" }}
              className="img-fluid rounded-top"
              alt="blogimg"
            />
          </div>

          <div className="collection-container ps-3 pe-3 pb-3">
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
            <h6 className="mb-0" style={{ fontSize: "12px" }}>
              Kids Headphone bulk 10 pack multi colored for students
            </h6>
            <ReactStars
              count={5}
              //onChange={ratingChanged}
              value={3}
              size={18}
              color2={"#ffd700"}
            />
            <p
              className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              style={{ fontSize: "12px" }}
            >
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value. If you
              cannot provide a valid href, but still need the element to
              resemble a link, use a butt
            </p>
            <p className="m-0" style={{ fontSize: "12px" }}>
              <s className="text-danger">$250.00</s> $100.00
            </p>
          </div>
        </Link>

        <div className="action-bar">
          <div>
            <img src={blogIm} alt="blog" className="img-fluid" />
          </div>
          <div>
            <img src={blogIm}  alt="blog"/>
          </div>
        </div>
      </div>
    </div>
  );
}
