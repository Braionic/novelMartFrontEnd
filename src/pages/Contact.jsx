import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";
import { IoHome, IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div>
      <ReactHelmet pageTitle="Contact Us" />
      <HeadingBar title="Contact Us" />
      <section className="contact-main-wrapper">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1711835182026!5m2!1sen!2sus"
                width="600"
                height="450"
                title="contact"
                className="b-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="contact-form-area d-flex justify-content-around bg-white my-5 p-3 rounded shadow">
                <div>
                  <h5 className="my-4">Contact Form</h5>
                  <form className="contact-form d-flex align-items-center justify-content-center flex-column gap-3">
                    <div>
                      <input
                        className="py-2 w-100"
                        type="text"
                        name="name"
                        placeholder="enter name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="w-100"
                        type="text"
                        email="name"
                        placeholder="enter email"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        style={{ resize: "none" }}
                        cols={5}
                        rows={5}
                        className="text-area w-100 p-3"
                      >
                        Enter informations here
                      </textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        className="contact-submit-btn px-2 py-1 border-0 rounded"
                        type="button"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="contact-details">
                  <h5 className="my-4">Get intouch with us</h5>
                  <div className="contact-list-container"></div>
                  <ul className="contact-us-list ps-0">
                    <li>
                      <IoHome />
                      <span>
                        1 edomwadagbeon street of new lagos road benin
                      </span>
                    </li>
                    <li>
                      <IoCall />
                      <tel>45678909876789</tel>
                    </li>
                    <li>
                      <FaEnvelope />
                      <email>trustedward@gmail.com</email>
                    </li>
                    <li>
                      <BsCalendar2DateFill />
                      <span className="">From Mon - Fri</span>
                    </li>
                    <div></div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
