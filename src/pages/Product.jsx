import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";
import OurstoreCards from "../components/OurstoreCards";

export default function Product() {
  return (
    <>
      <ReactHelmet pageTitle="Product name" page="product" />
      <HeadingBar title="product name" />
      <section className="main-wrapper my-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-6 p-4 bg-dark rounded "></div>
            <div className="col-6 p-4 bg-light rounded"></div>
          </div>
        </div>
      </section>
      <section className="wrapper-2 mb-5">
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
