import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compareImg from "../images/compare.svg";
import wishImg from "../images/wishlist.svg";
import cartImg from "../images/cart.svg";
import userImg from "../images/user.svg";
import menuImage from "../images/menu.svg";
export default function Header() {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="mb-0 text-white">Free Shipping Over $100 </p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-white text-end">
                help-Line <a href="tel: +19439387337">+1 943 938 7337</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-top p-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to=".">NovelMart</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search products here"
                  aria-label="Search products here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2 p-2">
                  <BsSearch className="fs-7" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-top-links d-flex align-items-center justify-content-between">
                <Link to="/compare" className="compare d-flex gap-2">
                  <img src={compareImg} alt="compare icon" />

                  <p className="text-white mb-2">
                    compare <br />
                    Products
                  </p>
                </Link>
                <Link to="wishlist" className="compare d-flex gap-2">
                  <img src={wishImg} alt="compare icon" />

                  <p className="text-white mb-2">
                    Favourite <br />
                    Wishlist
                  </p>
                </Link>
                <Link className="compare d-flex gap-2">
                  <img src={userImg} alt="compare icon" />
                  <NavLink to="login">
                    <p className="text-white mb-2">
                      Log in <br />
                      My Account
                    </p>
                  </NavLink>
                </Link>
                <Link to="cart" className="compare d-flex gap-2">
                  <img src={cartImg} alt="compare icon" />
                  <div className="d-flex flex-column gap-1">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="text-white mb-2">$500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="headerbottom">
        <div className="container-xxl">
          <div className="rows">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-start gap-4">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menuImage} alt="menu" />
                      <span className="d-inline-block m-1 me-3">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link class="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="navlinks">
                  <div className="d-flex align-items-center justify-content-between gap-4">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="our-store">Our Store</NavLink>
                    <NavLink to="blog">Blogs</NavLink>
                    <NavLink to="contact">Contacts</NavLink>
                    <NavLink to="about">About</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
