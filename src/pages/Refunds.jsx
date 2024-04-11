import React from "react";
import HeadingBar from "../components/HeadingBar";
import ReactHelmet from "../components/ReactHelmet";

export default function Refunds() {
  return (
    <>
      <ReactHelmet pageTitle="Refund Policy" page="refunds" />
      <HeadingBar title="Refund Policy" />
      <section className="main-wrapper my-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="refunds p-5">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
