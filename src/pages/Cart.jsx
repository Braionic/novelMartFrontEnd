import React from "react";
import HeadingBar from "../components/HeadingBar";
import ReactHelmet from "../components/ReactHelmet";
import Marquee from "react-fast-marquee";
import CartCard from "../components/CartCard";
import PromoCode from "../components/PromoCode";
import ButtonLg from "../components/ButtonLg";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div className="bg-light">
      <ReactHelmet pageTitle="Cart" />
      <HeadingBar title="Cart" />

      <section className="mb-5">
        <Marquee className="bg-success mb-5">
          <p className="text-white">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available.
          </p>
        </Marquee>
        <div className="container-xl">
          <h5>Shoping Cart</h5>
          <div className="row">
            <div className="col-8">
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
            <div className="col-4">
              <div className="checkout-details p-2">
                <PromoCode />
                <div className="form-group mb-3">
                  <fieldset className="the-fieldset border border-2  rounded-3 p-2 bg-light">
                    <legend className="the-legend float-none w-auto px-3 mb-0 fs-6 fw-bold  ">
                      Cart Summary
                    </legend>
                    <div className="p-2">
                      <div className="subtotal d-flex align-items-center justify-content-between">
                        <p className="font-13 text-secondary ">Subtotal</p>
                        <p className="font-13 text-dark fw-bold">$997</p>
                      </div>
                      <div className="subtotal d-flex align-items-center justify-content-between">
                        <p className="font-13 text-secondary ">Shipping</p>
                        <p className="font-13  text-dark fw-bold">$9.9</p>
                      </div>
                      <div className="subtotal d-flex align-items-center justify-content-between">
                        <p className="font-13 text-secondary ">
                          Free shipping promo
                        </p>
                        <p className="font-13 text-dark fw-bold">$9.9</p>
                      </div>
                      <div className="subtotal d-flex align-items-center border-bottom  justify-content-between">
                        <p className="font-13 text-secondary ">Sales tax</p>
                        <p className="font-13  text-dark fw-bold">$9.8</p>
                      </div>
                      <div className="subtotal mt-3 mb-0 d-flex align-items-center justify-content-between">
                        <p className="font-13 fw-bold  text-secondary ">
                          Total cost
                        </p>
                        <p className="font-13 mb-0 text-dark fw-bold">$9.9</p>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="form-group">
                  <fieldset className="the-fieldset border border-2  rounded-3 p-2 bg-light">
                    <legend className="the-legend float-none w-auto px-3 mb-0 fs-6 fw-bold  ">
                      Checkout
                    </legend>
                    <div className=" d-flex flex-column gap-2 ">
                      <Link to="/checkout">
                        <ButtonLg label="Checkout" color="dark" />
                      </Link>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
