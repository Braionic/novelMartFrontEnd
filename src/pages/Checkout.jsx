import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

import CheckoutProductComponent from "../components/CheckoutProductComponent";
export default function Checkout() {
  return (
    <>
      <section className="main-wrapper my-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-7 px-5">
              <div className="shipping">
                <h3>NovelMart</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="bc" to="/cart">
                        Cart
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <Link className="bc" to="/cart">
                        Information
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Shipping
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4>Contact information</h4>
                <p className="font-14">Henry C (Braionic@gmail.com)</p>
                <p className="font-14">Log out</p>
                <div className="form">
                  <form className="d-flex align-items-center justify-content-between  gap-3  flex-wrap">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Email me with news and offers
                      </label>
                    </div>
                    <div className="form-group w-100">
                      <select
                        className="form-control form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Saved address</option>
                        <option value="1">Use a new address</option>
                      </select>
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group w-100 ">
                      <select
                        className="form-control form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Country/Region</option>
                        <option value="1">Use a new address</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="First name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="form-group w-100">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Address"
                      />
                      <small className="text-muted">
                        Add a house number if you have one
                      </small>
                    </div>
                    <div className="form-group w-100">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Apartment"
                      />
                    </div>
                    <div className="form-group flex-grow-1  ">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="City"
                      />
                    </div>
                    <div className="form-group flex-grow-1  ">
                      <select
                        type="text"
                        className="form-control form-select "
                        id="exampleInputPassword1"
                        placeholder="State"
                      >
                        <option>Chicago</option>
                      </select>
                    </div>
                    <div className="form-group flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Zip code"
                      />
                    </div>

                    <div className="w-100 d-flex align-items-center justify-content-between gap-2 my-5">
                      <Link className="btn" to="/cart">
                        <IoMdArrowBack /> Return to cart
                      </Link>

                      <button
                        type="submit"
                        className="btn btn-primary btn-danger p-2"
                      >
                        Proceed to shipping
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="checkout-items">
                <div className="border-3 py-2 border-bottom">
                <CheckoutProductComponent />
                <CheckoutProductComponent />
                
                </div>
                <div className="costs border-3 border-bottom py-2 ">
                  <div className="subtotal d-flex align-items-center justify-content-between">
                  <p className="total text-secondary">Subtotal</p>
                  <p className="price">$200.00</p>
                  </div>
                  <div className="shipping d-flex align-items-center justify-content-between pb-2 ">
                  <p className="total text-secondary">Shipping</p>
                  <p className="price">$19.21</p>
                  </div>
                </div>
                <div className="costs py-2 ">
                  <div className="subtotal d-flex align-items-center justify-content-between">
                  <p className="total text-secondary fw-bold">Total</p>
                  <p className="price fs-5">$220.21</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
