import React from "react";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
import ReactStars from "react-stars";

export default function BlogSideBar() {
  return (
    <div className="side-bar-container">
      <div className="lists-container categories p-2 bg-white my-3 rounded">
        <h6 className="fs-0">Shop By Category</h6>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/our-store">Our Store</Link>
          </li>
          <li>
            <Link to=".">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
