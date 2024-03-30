import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import logo from "../images/main-banner-1.jpg";
import blogImg from "../images/blog-1.jpg";
import leftBanner1 from "../images/catbanner-01.jpg";
import leftBanner2 from "../images/catbanner-03.jpg";
import leftBanner3 from "../images/catbanner-02.jpg";
import leftBanner4 from "../images/catbanner-04.jpg";
import service from "../images/service.png";
import service1 from "../images/service-02.png";
import service2 from "../images/service-03.png";
import service3 from "../images/service-04.png";
import service4 from "../images/service-05.png";
import laptop from "../images/laptop.jpg";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import watch from "../images/watch.jpg";
import phone from "../images/tab.jpg";
import headphone from "../images/headphone.jpg";

import { Link } from "react-router-dom";
import BrandsSlider from "../components/BrandsSlider";
import BlogCards from "../components/BlogCards";
import FCards from "../components/FCollections";
import SpecialProducts from "../components/SpecialProducts";
import ReactHelmet from "../components/ReactHelmet";
export default function Homepage() {
  return (
    <div>
      <ReactHelmet pageTitle='NovelMart' />
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
                  <Link>
                    <p>Buy Now</p>
                  </Link>
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
                    <p>
                      From $999.00
                      <br />
                      or 41.62/month
                    </p>
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
                    <p>
                      From $999.00
                      <br />
                      or 41.62/month
                    </p>
                  </div>
                </div>
                <div className="small-image third-image position-relative">
                  <img
                    src={leftBanner3}
                    className="rounded-3 img-fluid"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>supercharged for pros</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00
                      <br />
                      or 41.62/month
                    </p>
                  </div>
                </div>
                <div className="small-image fouth-image position-relative">
                  <img
                    src={leftBanner4}
                    className="rounded-3 img-fluid"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>supercharged for pros</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00
                      <br />
                      or 41.62/month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2 py-5">
        <div className="container-xxl">
          <div className="d-flex align-items-center justify-content-between px-5">
            <div className="d-flex align-items-center justify-content-center gap-4">
              <img src={service} alt="free shipping" />
              <div className="service-details">
                <h5>Free Shipping</h5>
                <p>From all orders above $100</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-4">
              <img src={service1} alt="daily offers" />
              <div className="service-details">
                <h5>Free Shipping</h5>
                <p>From all orders above $100</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-4">
              <img src={service2} alt="support" />
              <div className="service-details">
                <h5>Free Shipping</h5>
                <p>From all orders above $100</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-4">
              <img src={service3} alt="affordable prices" />
              <div className="service-details">
                <h5>Free Shipping</h5>
                <p>From all orders above $100</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-4">
              <img src={service4} className="" alt="secure payments" />
              <div className="service-details">
                <h5>Free Shipping</h5>
                <p>From all orders above $100</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lowersection m-5 py-5">
          <div className="container-xxl">
            <div className="d-flex align-items-center justify-content-between gap-3 px-5 flex-wrap">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <div className="service-details">
                  <h5>Laptops</h5>
                  <p>10 items</p>
                </div>
                <img src={laptop} width={70} height={70} alt="free shipping" />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="service-details">
                  <h5>Cameras</h5>
                  <p>7 items</p>
                </div>
                <img src={camera} width={70} height={70} alt="daily offers" />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="service-details">
                  <h5>Televisions</h5>
                  <p>14 items</p>
                </div>
                <img
                  src={tv}
                  className=""
                  width={70}
                  height={70}
                  alt="support"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="service-details">
                  <h5>Smart Watches</h5>
                  <p>6 items</p>
                </div>
                <img
                  src={watch}
                  width={70}
                  height={70}
                  alt="affordable prices"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="service-details">
                  <h5>Music & Gaming</h5>
                  <p>From all orders above $100</p>
                </div>
                <img src={watch} width={70} height={70} alt="secure payments" />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <div className="service-details">
                  <h5>Smart Sphones</h5>
                  <p>10 items</p>
                </div>
                <img
                  src={headphone}
                  width={70}
                  height={70}
                  alt="free shipping"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="service-details">
                  <h5>Cameras</h5>
                  <p>7 items</p>
                </div>
                <img src={camera} width={70} height={70} alt="daily offers" />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="service-details">
                  <h5>Televisions</h5>
                  <p>14 items</p>
                </div>
                <img
                  src={tv}
                  className=""
                  width={70}
                  height={70}
                  alt="support"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="service-details">
                  <h5>Smart Watches</h5>
                  <p>6 items</p>
                </div>
                <img
                  src={watch}
                  width={70}
                  height={70}
                  alt="affordable prices"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center gap-4">
                <div className="service-details">
                  <h5>Music & Gaming</h5>
                  <p>From all orders above $100</p>
                </div>
                <img src={watch} width={70} height={70} alt="secure payments" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-product my-4">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-12">
              <h4 className="heading">Special Product</h4>
            </div>
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>
        </div>
      </section>
      <section className="brand-section py-5" style={{ backgroundColor: "" }}>
        <BrandsSlider />
      </section>
      <section className="container-xl blog-container my-3">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mx-4" style={{ fontSize: "19px", fontWeight: "600" }}>
            Featured Collections
          </h4>
          <div className="blog-toggle px-4">
            <FaAngleLeft color="grey" style={{ cursor: "pointer" }} />
            <FaAngleRight color="grey" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="row justify-content-center g-3 p-3">
          <FCards />
          <FCards />
          <FCards />
          <FCards />
        </div>
      </section>
      <section
        className="container-xl blog-container my-3"
        style={{ Width: "100%" }}
      >
        <div className="d-flex align-item-center justify-content-between p-3">
          <h4 className="mx-4" style={{ fontSize: "19px", fontWeight: "600" }}>
            Our Latest News
          </h4>
          <div className="blog-toggle px-4">
            <FaAngleLeft color="grey" style={{ cursor: "pointer" }} />
            <FaAngleRight color="grey" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="blog-cards-container d-flex align-item-item-center justify-content-center flex-wrap gap-2 ">
          <BlogCards />
          <BlogCards />
          <BlogCards />
          <BlogCards />
        </div>
      </section>
    </div>
  );
}
