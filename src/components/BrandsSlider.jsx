import React from "react";
import Marquee from "react-fast-marquee";
import brandOne from "../images/brand-01.png";
import brandTwo from "../images/brand-02.png";
import brandThree from "../images/brand-03.png";
import brandFour from "../images/brand-04.png";
import brandFive from "../images/brand-05.png";
import brandSix from "../images/brand-06.png";
import brandSeven from "../images/brand-07.png";
import brandEight from "../images/brand-08.png";
export default function BrandsSlider() {
  return (
    <div className="mx-5" style={{backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 0px 5px gray", padding: 0}}>
    <Marquee>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="brand-images d-flex align-item-center justify-content-center gap-5">
              <div className="brand-image">
                <img src={brandOne} className="w-80" />
              </div>
              <div>
                <img src={brandTwo} className="w-70" />
              </div>
              <div>
                <img src={brandThree} className="w-70" />
              </div>
              <div>
                <img src={brandFour} className="w-70" />
              </div>
              <div>
                <img src={brandFive} className="w-70" />
              </div>
              <div>
                <img src={brandSix} className="w-70" />
              </div>
              <div>
                <img src={brandSeven} className="w-80" />
              </div>
              <div>
                <img src={brandEight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Marquee>
    </div>
  );
}
