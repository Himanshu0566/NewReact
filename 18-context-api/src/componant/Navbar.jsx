import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { dataheadingContext } from "../context/ThemeContext";

const Navbar = (props) => {
  const data = useContext(dataheadingContext);
  return (
    <div className="flex bg-lime-500 items-center justify-between p-9 font-bold">
      <h2 className="text-3xl">{data}</h2>
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;
