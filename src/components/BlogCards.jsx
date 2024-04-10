import React from "react";
import blogImg from "../images/blog-1.jpg";
import { Link } from "react-router-dom";
export default function BlogCards() {
  return (
    <div
      className="blogcards"
      style={{
        boxShadow: "0 0 5px grey",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <div className="blogimg">
        <img
          src={blogImg}
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            width: "100%"
          }}
          className="img-fluid"
          alt="blogimg"
        />
      </div>
      <div className="blogcontent p-3">
        <p className="date">24 March 2024</p>
        <h6>Iphone 30 pro max 256GB</h6>
        <p className="desc">
          This device is nice and recommended anywhere in the world, you can
          trust me on that
        </p>
        <Link to="/blog/id">
          <button className="readmore">Read More</button>
        </Link>
      </div>
    </div>
  );
}
