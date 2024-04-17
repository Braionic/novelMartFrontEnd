import React from "react";
import watch from "../images/watch.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
export default function CartCard() {
  return (
    <div className="cart-items p-2 d-flex align-align-items-center gap-3">
      <div className="item-img overflow-hidden h-25 w-25">
        <img src={watch} alt="watch" className="img-fluid" />
      </div>
      <div className="item-details ">
        <h5 className="fs-6 fw-semibold">Watch Number 4 Winter Collection</h5>
        <p className="font-14 text-secondary ">Large size strap</p>
        <p className="fw-bold">$199</p>
        <div className="towishlist d-flex align-items-center gap-2 text-success mb-1">
          <MdFavoriteBorder size={18} />
          <p className="font-14 mb-0 ">Wish to wishlist</p>
        </div>
        <div className="delete d-flex align-items-center gap-2 text-success ">
          <CiTrash size={18} />
          <p className="font-14 mb-0 ">Wish to wishlist</p>
        </div>
      </div>
    </div>
  );
}
