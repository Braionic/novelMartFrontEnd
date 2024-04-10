import React from "react";
import ReactHelmet from "../components/ReactHelmet";
import HeadingBar from "../components/HeadingBar";

import WishlistCard from "../components/WishlistCard";
export default function Wishlist() {
  return (
    <>
      <ReactHelmet pageTitle="Wishlist" page="/wishlist" />
      <HeadingBar title="Wishlist" />
      <section className="main-wrapper py-3">
        <div className="container-xl">
          <div className="row">
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
            <WishlistCard />
          </div>
        </div>
      </section>
    </>
  );
}
