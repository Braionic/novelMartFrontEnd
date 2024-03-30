import React from "react";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
import ReactStars from "react-stars";

export default function OurStoreSideBar({ link, secondHeading }) {
  return (
    <div className="side-bar-container">
      <div className="lists-container categories p-2 bg-white my-3 rounded">
        <h6 className="fs-0">Shop By Category</h6>
        <ul>
          <li>
            <Link to="/">{link.link1}</Link>
          </li>
          <li>
            <Link to="/">{link.link2}</Link>
          </li>
          <li>
            <Link to="/">{link.link3}</Link>
          </li>
          <li>
            <Link to="/">{link.link4}</Link>
          </li>
        </ul>
      </div>
      <div className="lists-container filter p-2 my-3 bg-white rounded">
        <h6 className="fs-0">{secondHeading}</h6>
        <h6>Availability</h6>
        <div className="form-check p2">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            in stock (1)
          </label>
        </div>
        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" for="flexCheckChecked">
            out of stock
          </label>
        </div>
        <h6>Price</h6>
        <div className="floating-input d-flex align-items-center justify-content-center gap-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="From"
          />

          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="To"
          />
        </div>
        <h6 className="pt-2">Colors</h6>
        <ul className="colors d-flex align-items-center gap-1 flex-wrap">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h6>size</h6>
        <div className="form-check p2">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            S (1)
          </label>
        </div>
        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" for="flexCheckChecked">
            M (2)
          </label>
        </div>
      </div>
      <div className="lists-container categories p-2 bg-white my-3 rounded">
        <h6 className="fs-0">Product Tag</h6>
        <div className="filter-tags d-flex align-items-center flex-wrap g-3">
          <button type="button" className="btn btn-sm bg-light text-dark">
            HeadPhones
          </button>
          <button type="button" className="btn btn-sm bg-light text-dark">
            Laptops
          </button>
          <button type="button" className="btn btn-sm bg-light text-dark">
            Mobile
          </button>
          <button type="button" className="btn btn-sm bg-light text-dark">
            Mobile
          </button>
          <button type="button" className="btn btn-sm bg-light text-dark">
            Mobile
          </button>
          <button type="button" className="btn btn-sm bg-light text-secondary">
            wig
          </button>
        </div>
      </div>

      <div className="lists-container categories p-2 bg-white my-3 rounded">
        <h6 className="fs-0">Random Product</h6>
        <div className="random-product-container d-flex align-items-center">
          <img
            src={watch}
            style={{ objectFit: "contain", width: "100px" }}
            className="img-fluid rounded-top"
            alt="blogimg"
          />
          <div className="collection-container ps-3 pe-3 pb-3">
            <h6 className="mb-1" style={{ fontSize: "12px" }}>
              Kids Headphone bulk 10 pack multi colored for students
            </h6>
            <ReactStars
              count={5}
              //onChange={ratingChanged}
              value={3}
              size={18}
              color2={"#ffd700"}
            />

            <p className="m-0" style={{ fontSize: "12px" }}>
              <s className="text-danger">$250.00</s> $100.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
