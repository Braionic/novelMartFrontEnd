import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Ourstore from "./pages/Ourstore";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Compare from "./pages/Compare";
import Wishlist from "./pages/WishList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/FoegotPassword";
import SingleBlog from "./pages/SingleBlog";
import TermsConditions from "./pages/TermsConditions";
import Privacy from "./pages/Privacy";
import Deliveries from "./pages/Deliveries";
import Returns from "./pages/Returns";
import Refunds from "./pages/Refunds";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="our-store" element={<Ourstore />} />
          <Route path="our-store/product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compare" element={<Compare />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="terms" element={<TermsConditions />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="deliveries" element={<Deliveries />} />
          <Route path="returns" element={<Returns />} />
          <Route path="refunds" element={<Refunds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
