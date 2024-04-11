import React from "react";
import HeadingBar from "../components/HeadingBar";
import ReactHelmet from "../components/ReactHelmet";

export default function TermsConditions() {
  return (
    <>
      <ReactHelmet pageTitle="Terms & Conditions" page="terms" />
      <HeadingBar title="Terms & Conditions" />
      
      <section className="main-wrapper m-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="terms rounded p-5">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
