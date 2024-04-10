import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="main-wrapper h-100">
        <div className="container-xl py-5">
          <div className="row">
            <div className="col-12">
              <div className="form-container d-flex align-items-center justify-content-center ">
                <form className="bg-white  px-5 py-3 rounded w-50">
                  <div className="">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label text-white "
                      for="exampleCheck1"
                    >
                      Check me out
                    </label>
                  </div>
                  <div className="d-flex align-items-center  justify-content-center gap-3 mb-3">
                    <button type="submit" className="btn btn-warning rounded-pill">
                      Sign In
                    </button>
                    <Link to="/signup">
                      <button type="submit" className="btn btn-dark rounded-pill">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                 
                  <div className="d-flex align-items-center  justify-content-center gap-3">
                  <Link to="/forgotpassword" className="text-dark">Forgot Password</Link>
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
