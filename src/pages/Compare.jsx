import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";

import CompareCard from "../components/CompareCard";
export default function Compare() {
  return (
    <>
      <ReactHelmet pageTitle="Compare Products" page="/compare" />
      <HeadingBar title="Compare" />
      <section className="main-wrapper">
        <div className="container-xl">
          <div className="row p-5">
            <CompareCard />
            <CompareCard />
            <CompareCard />
            <CompareCard />
          </div>
        </div>
      </section>
    </>
  );
}
