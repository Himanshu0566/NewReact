import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Mens from "../pages/Mens";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import NotFound from "../pages/NotFound";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/product" element={<Product />}>
          <Route path="mens" element={<Mens />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routess;
