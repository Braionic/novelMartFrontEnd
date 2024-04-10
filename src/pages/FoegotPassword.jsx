import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
      <section className="main-wrapper h-100">
        <div className="container-xl py-5">
          <div className="row">
            <div className="col-12">
              <div className="form-container d-flex align-items-center justify-content-center ">
                <form className="bg-secondary  px-5 py-3 rounded text-light w-50">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control w-100"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="d-flex align-items-center  justify-content-center mb-3">
                    <button type="submit" className="btn btn-info">
                      Reset
                    </button>
                  </div>
                  <div className="d-flex align-items-center  justify-content-center gap-3">
                  <Link to="/login">Return To Sign In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
