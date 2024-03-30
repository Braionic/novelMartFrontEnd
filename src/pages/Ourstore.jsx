import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeadingBar from "../components/HeadingBar";
import OurStoreSideBar from "../components/OurStoreSideBar";
import OurstoreCards from "../components/OurstoreCards";
import { Helmet } from "react-helmet";
import ReactHelmet from "../components/ReactHelmet";
export default function Ourstore() {
  const [grid, setGrid] = useState(() => 3);
  return (
    <div>
      <ReactHelmet pageTitle="Our Store" page="our-store" />
      <HeadingBar title="our store" />
      <section className="section-2-wrapper m-3">
        <div className="container-xl">
          <div className="row">
            <div className=" col-lg-3">
              <OurStoreSideBar
                link={{
                  link1: "Watch",
                  link2: "TV",
                  link3: "Camera",
                  link4: "Laptop",
                  link5: "Stationeries",
                  link6: "Digital Products",
                }}
                secondHeading="Filter By"
              />
            </div>
            <div className="col-lg-9">
              <div className="bg-white my-3 p-2 bg-white d-flex align-items-center justify-content-between rounded">
                <div className="filter-bar d-flex align-items-center justify-content-center ">
                  <div className="sortBy">
                    <p
                      className="fw-bold"
                      style={{
                        fontSize: "12px",
                        padding: "5px",
                        display: "inline",
                      }}
                    >
                      Sort By
                    </p>
                  </div>
                  <div className="btn-group sort-dropdown">
                    <button
                      class="btn btn-white btn-sm dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Best Selling
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a class="dropdown-item active" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Separated link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sort-display">
                  <button onClick={() => setGrid(3)} className={`btn btn-active ${grid === 3? "bg-dark text-light": null}`}>
                    <FaBars />
                  </button>
                  <button onClick={() => setGrid(4)} className="btn btn-active">
                    <FaBars />
                  </button>
                  <button onClick={() => setGrid(6)} className="btn btn-active">
                    <FaBars />
                  </button>
                  <button
                    onClick={() => setGrid(12)}
                    className="btn btn-active"
                  >
                    <FaBars />
                  </button>
                </div>
              </div>
              <div className="row g-2">
                <OurstoreCards grid={grid} />
                <OurstoreCards grid={grid} />
                <OurstoreCards grid={grid} />
                <OurstoreCards grid={grid} />
                <OurstoreCards grid={grid} />
                <OurstoreCards grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
