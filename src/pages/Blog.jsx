import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";

import BlogSideBar from "../components/BlogSideBar";
import BlogCards from "../components/BlogCards";

export default function Blog() {
  return (
    <div>
      <ReactHelmet pageTitle="Our Blog" page="blog" />
      <HeadingBar title="Our Blog" />
      <section className="main-blog-container my-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-3 p-1">
              <BlogSideBar />
            </div>
            <div className="col-lg-9 p-4">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <BlogCards />
                <BlogCards />
                <BlogCards />
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
