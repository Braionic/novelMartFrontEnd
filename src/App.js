import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Ourstore from "./pages/Ourstore";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="our-store" element={<Ourstore />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
