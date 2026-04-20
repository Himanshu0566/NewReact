import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 items-center bg-cyan-900 justify-between">
      <h2 className="text-xl font-bold">Navneet</h2>
      <div className="flex gap-8">
        <Link to={"/"} className="text-lg font-bold">
          Home
        </Link>
        <Link to={"/about"} className="text-lg font-bold">
          About
        </Link>
        <Link to={"/product"} className="text-lg font-bold">
          Product
        </Link>
        <Link to={"/courses"} className="text-lg font-bold">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
