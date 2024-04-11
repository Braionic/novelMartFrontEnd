import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";

export default function Deliveries() {
  return (
    <>
      <ReactHelmet pageTitle="Delivery Policy" page="deliveries" />
      <HeadingBar title="Delivery Policy" />
      <section className="main-wrapper p-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
                <div className="delivery p-5">

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
