import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Tanushree</h3>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;
