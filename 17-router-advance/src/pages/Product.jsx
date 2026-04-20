import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center font-bold gap-10 py-6">
        <Link to={"/product/mens"}>Mens</Link>
        <Link to={"/product/women"}>Women</Link>
        <Link to={"/product/kids"}>Kids</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
