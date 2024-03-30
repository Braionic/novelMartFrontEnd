import React from "react";
import SPI from "../images/speaker.jpg";
import fav from "../images/wish.svg"
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
export default function SpecialProducts() {
  return (
    <>
      <div className="col-4">
        <div className="product-container p-2 bg-white rounded">
          <div className="row">
            <div className="col-6">
              <Link to="product">
                <div className="dis-fav d-flex align-items-center justify-content-between">
                    <span className="badge bg-warning rounded-pill text-dark" style={{fontSize: "10px"}}>-33%</span>
                    <img src={fav} />
                </div>
                <div className="s-product-image">
                  <img src={SPI} className="img-fluid" style={{width: "200px"}} />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3 gap-3">
                  <div className="border">
                    <img
                      src={SPI}
                      className="img-fluid"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="border">
                    <img
                      src={SPI}
                      className="img-fluid"
                      style={{ width: "80px" }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-6">
              <div className="s-product-details">
                <h6 className="text-danger mt-3" style={{fontSize: "12px"}}>Havells</h6>
                <p
                  className="product-title fw-bold"
                  style={{ fontSize: "12px" }}
                >
                  Samsung Galaxy Note 10+ mobile phone sim
                </p>
                <ReactStars
                  count={5}
                  //onChange={ratingChanged}
                  size={18}
                  color2={"#ffd700"}
                />
                <span style={{ color: "red", fontSize: "13px" }}>$102.00 </span>
                <span style={{ color: "grey", fontSize: "13px" }}>
                  <s>$200</s>
                </span>
                <div className="discount-counter">
                  <span className="fw-bold" style={{ fontSize: "11px" }}>
                    878{" "}
                  </span>
                  <span className="text-secondary" style={{ fontSize: "12px" }}>
                    Days
                  </span>{" "}
                  <span
                    className="badge bg-danger rounded-circle fw-light"
                    style={{ fontSize: "10px" }}
                  >
                    0
                  </span>
                  :
                  <span
                    className="badge bg-danger rounded-circle fw-light"
                    style={{ fontSize: "10px" }}
                  >
                    5
                  </span>
                  :
                  <span
                    class="badge rounded-circle bg-danger fw-light"
                    style={{ fontSize: "10px" }}
                  >
                    8
                  </span>
                </div>
                <p className="text-secondary mt-3" style={{ fontSize: "12px" }}>
                  Product 42
                </p>
                <div className="progress" style={{ height: "5px" }}>
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <button
                  type="button"
                  style={{ fontSize: "10px" }}
                  className="btn btn-sm  bg-dark text-white mt-3 rounded-pill"
                >
                  OPTION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
