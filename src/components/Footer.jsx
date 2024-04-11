import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
import newsletterImg from "../images/newsletter.png";
import cert from "../images/DISTRIBUTOR APPOINTMENT - GREEN HYBRID 2023.jpg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="d-flex align-items-center gap-3">
                <img src={newsletterImg} width={30} height={20} />
                <h3 className="text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group px-5">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Search products here"
                  aria-label="Search products here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2 p-2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div>
                <h4 className="text-white">Address</h4>
                <p className="text-white">
                  05 Stanley Kunu street, beside S&T barrack. Opposite Jonny
                  guest house. off isihor, Benin City, Edo state
                </p>
                <a href="tel: 0809599847" className="py-1">
                  Tel: 080******
                </a>
                <br />

                <a href="mailto: braionic@gmail.com" className="pb-1">
                  Braionic@gmail.com
                </a>
              </div>
              <div className="social-icons d-flex gap-3">
                <FaInstagram size={20} color="white" />
                <FaFacebook size={20} color="white" />
                <FaTwitter size={20} color="white" />
                <FaTiktok size={20} color="white" />
              </div>
            </div>
            <div className="col-3 text-white d-flex flex-column gap-2">
              <h5>OUR STORE</h5>
              <Link to="returns">Returns</Link>
              <Link>How To Buy</Link>
              <Link to="deliveries">Deliveries</Link>
              <Link>Coupons & Promotions</Link>
            </div>
            <div className="col-2 text-white d-flex flex-column gap-2">
              <h5>USEFULL LINKS</h5>
              <Link to="terms">Terms & Condition</Link>
              <Link to="contact">Contact Us</Link>
              <Link to="privacy">Privacy</Link>
            </div>
            <div className="col-2 text-white d-flex flex-column gap-2">
              <h5>CONNECT WITH US</h5>
              <Link>Instagram</Link>
              <Link>Facebook</Link>
              <Link>TikTok</Link>
              <Link>WhatsApp</Link>
            </div>
            <div className="col-2 text-white d-flex flex-column gap-2">
              <h5></h5>
              <div>
                <img
                  src={cert}
                  width={150}
                  height={150}
                  style={{ borderRadius: 8 }}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-2">
        <div className="container-xxl">
          <div className="rows">
            <div className="col-12">
              <p className="text-center md-0 text-white">
                &copy; {new Date().getFullYear()} Powered By Braionic
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
