import React, { createContext } from "react";
export const dataheadingContext = createContext();
const ThemeContext = (props) => {
  return (
    <div>
      <dataheadingContext.Provider value="Tanushri">
        {props.children}
      </dataheadingContext.Provider>
    </div>
  );
};

export default ThemeContext;
