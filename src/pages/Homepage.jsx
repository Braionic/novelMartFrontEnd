import React from "react";
import logo from "../images/main-banner-1.jpg";

import leftBanner1 from "../images/catbanner-01.jpg";
import leftBanner2 from "../images/catbanner-03.jpg";
import leftBanner3 from "../images/catbanner-02.jpg";
import leftBanner4 from "../images/catbanner-04.jpg";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      <section>
        <div className="container-xxl">
          <div className="rows d-flex align-item-center justify-content-between gap-4 p-5">
            <div className="col-6">
              <div className="main-banner-content position-relative">
                <img
                  src={logo}
                  className="rounded-3 img-fluid"
                  alt="main-banner"
                />
                <div className="banner-content position-absolute">
                  <h4>supercharged for pros</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00/41.62/month</p>
                  <Link><p>Buy Now</p></Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-item-center justify-content-center flex-wrap gap-3 flex-row">
              <div className="small-image first-image position-relative">
                <img
                  src={leftBanner1}
                  className="rounded img-fluid"
                  alt="main-banner"
                />
                 <div className="small-banner-content position-absolute">
                  <h4>supercharged for pros</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00<br />or 41.62/month</p>
                  
                </div>
              </div>
              <div className="small-image second-image position-relative">
                <img
                  src={leftBanner2}
                  className="rounded img-fluid"
                  alt="main-banner"
                />
                 <div className="small-banner-content position-absolute">
                  <h4>supercharged for pros</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00<br />or 41.62/month</p>
                  
                </div>
              </div>
              <div className="small-image third-image position-relative">
                <img
                  src={leftBanner3}
                  className="rounded img-fluid"
                  alt="main-banner"
                />
                 <div className="small-banner-content position-absolute">
                  <h4>supercharged for pros</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00<br />or 41.62/month</p>
                  
                </div>
              </div>
              <div className="small-image fouth-image position-relative">
                <img
                  src={leftBanner4}
                  className="rounded img-fluid"
                  alt="main-banner"
                />
                 <div className="small-banner-content position-absolute">
                  <h4>supercharged for pros</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00<br />or 41.62/month</p>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
