import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";
import OurstoreCards from "../components/OurstoreCards";
import ReactStars from "react-stars";
import ReactImageZoom from "react-image-zoom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";

export default function Product() {
  const props = {
    width: 400,
    height: 350,
    zoomWidth: 400,
    img: "https://watchlocker.ng/wp-content/uploads/2023/04/INV39076.jpg",
  };
  return (
    <>
      <ReactHelmet pageTitle="Product name" page="product" />
      <HeadingBar title="product name" />
      <section className="main-wrapper my-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-6 p-4rounded ">
              <div className="single-product-image">
                <div className="single-product-main-image bg-white p-5 border border-1 object-fit-cover ">
                  <ReactImageZoom {...props} />
                </div>
                <div className="single-product-grid-image-containter d-flex gap-2  flex-wrap align-items-center justify-content-center p-3 ">
                  <div className="single-product-grid-image bg-white border border-1">
                    <img
                      src="https://watchlocker.ng/wp-content/uploads/2023/04/INV39076.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="single-product-grid-image bg-white border border-1">
                    <img
                      src="https://watchlocker.ng/wp-content/uploads/2023/04/INV39076.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="single-product-grid-image bg-white border border-1">
                    <img
                      src="https://watchlocker.ng/wp-content/uploads/2023/04/INV39076.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="single-product-grid-image bg-white border border-1">
                    <img
                      src="https://watchlocker.ng/wp-content/uploads/2023/04/INV39076.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-4 bg-white rounded">
              <div className="single-product-details">
                <h5 className="py-2 border-bottom fs-6">
                  Kids Headphones Bulk Pack Multi Colored For Students
                </h5>
                <p className="fw-bold ">$100.00</p>
                <div className="d-flex align-items-center gap-1">
                  <ReactStars
                    count={5}
                    //onChange={ratingChanged}
                    value={3}
                    size={18}
                    color2={"#ffd700"}
                  />
                  <span className="single-page-review-text text-secondary">
                    (2 reviews)
                  </span>
                </div>
                <p className="single-page-review-text text-secondary py-3 border-bottom ">
                  Write a review
                </p>
                <div className="d-flex align-align-items-center ">
                  <p className="fw-bold me-2  ">Type:</p>
                  <p className="font-14 text-secondary">Headsets</p>
                </div>
                <div className="d-flex align-align-items-center ">
                  <p className="fw-bold me-2  ">Brand:</p>
                  <p className="font-14 text-secondary">Haveils</p>
                </div>
                <div className="">
                  <p className="fw-bold me-2 mb-0 ">Categories:</p>
                  <div>
                    <p className="font-14 text-secondary">
                      headsets cameras earpod, laptop, bags, electronics,
                      mobile, home appliances
                    </p>
                  </div>
                </div>
                <div className="d-flex align-align-items-center ">
                  <p className="fw-bold me-2  ">Tags:</p>
                  <div className="font-14 d-flex align-items-center justify-content-between gap-3">
                    <p className="text-secondary">headphones</p>
                    <p className="text-secondary">headphones</p>
                    <p className="text-secondary">headphones</p>
                    <p className="text-secondary">headphones</p>
                  </div>
                </div>
                <div className="d-flex align-align-items-center ">
                  <p className="fw-bold me-2  ">SKU:</p>
                  <p className="font-14 text-secondary">SKU027</p>
                </div>
                <div className="d-flex align-align-items-center ">
                  <p className="fw-bold me-2  ">Availability:</p>
                  <p className="font-14 text-secondary">712 in stock</p>
                </div>
                <div className=" ">
                  <p className="fw-bold me-2  ">Brand:</p>
                  <div className="d-flex align-items-center gap-1 ">
                    <p className="font-14 text-secondary px-2 border-dark  border border-2">
                      S
                    </p>
                    <p className="font-14 text-secondary px-2 border border-1">
                      M
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-start justify-content-start gap-3">
                  <p className="fw-bold mb-0 ">Color:</p>
                  <ul className=" font-14 text-secondary list-group list-unstyled d-flex flex-row gap-2 align-items-center justify-content-center ">
                    <li className="outline-black rounded-circle bg-danger px-3 py-3 list-group-item border border-light border-2 outline"></li>
                    <li className="rounded-circle bg-danger px-3 py-3 list-group-item border border-3 border-light "></li>
                  </ul>
                  <div className="d-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <div className="d-flex align-items-cente gap-2">
                    <p className="mb-0 fw-semibold ">Quantity</p>
                    <input type="text" className="w-50" name="quantity" />
                  </div>
                  <div className="">
                    <button className="btn btn-md btn-dark rounded-pill me-2 font-14">
                      Add To Cart
                    </button>
                    <button className="btn btn-md btn-warning rounded-pill font-14">
                      Buy it Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-align-items-center gap-4 my-3">
                  <div className="wishlist">
                    <MdFavoriteBorder size={20} />
                    <span>Add to wishlist</span>
                  </div>
                  <div className="favorite">
                    <IoIosGitCompare size={20} />
                    <span>Add to wishlist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="description">
                <h4 className="dscription-title">Description</h4>
                <div className="description-text bg-light p-4 rounded-3 shadow-mg ">
                  <p className="description-text">
                    REMIXING A CLASSIC So how did the classical Latin become so
                    incoherent? According to McClintock, a 15th century
                    typesetter likely scrambled part of Cicero's De Finibus in
                    order to provide placeholder text to mockup various fonts
                    for a type specimen book. It's difficult to find examples of
                    lorem ipsum in use before Letraset made it popular as a
                    dummy text in the 1960s, although McClintock says he
                    remembers coming across the lorem ipsum passage in a book of
                    old metal type samples. So far he hasn't relocated where he
                    once saw the passage, but the popularity of Cicero in the
                    15th century supports the theory that the filler text has
                    been used for centuries. And anyways, as Cecil Adams
                    reasoned, “[Do you really] think graphic arts supply houses
                    were hiring classics scholars in the 1960s?” Perhaps. But it
                    seems reasonable to imagine that there was a version in use
                    far before the age of Letraset. McClintock wrote to Before &
                    After to explain his discovery; “What I find remarkable is
                    that this text has been the industry's standard dummy text
                    ever since some printer in the 1500s took a galley of type
                    and scrambled it to make a type specimen book; it has
                    survived not only four centuries of letter-by-letter
                    resetting but even the leap into electronic typesetting,
                    essentially unchanged except for an occasional 'ing' or 'y'
                    thrown in. It's ironic that when the then-understood Latin
                    was scrambled, it became as incomprehensible as Greek; the
                    phrase 'it's Greek to me' and 'greeking' have common
                    semantic roots!” (The editors published his letter in a
                    correction headlined “Lorem Oopsum”). As an alternative
                    theory, (and because Latin scholars do this sort of thing)
                    someone tracked down a 1914 Latin edition of De Finibus
                    which challenges McClintock's 15th century claims and
                    suggests that the dawn of lorem ipsum was as recent as the
                    20th century.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper-3 mb-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="recommended p-4 rounded">
                <h3 className="">Our Popular Products</h3>
                <div className="row">
                  <OurstoreCards />
                  <OurstoreCards />
                  <OurstoreCards />
                  <OurstoreCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
