import React from "react";
import HeadingBar from "../components/HeadingBar";
import ReactHelmet from "../components/ReactHelmet";

export default function Returns() {
  return (
    <>
      <ReactHelmet pageTitle="Return Policy" page="Returns" />
      <HeadingBar title="Return Policy" />
      <section className="main-wrapper p-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="returns p-5"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
