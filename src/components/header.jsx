import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = (props) => {
  const firstHeader = useRef(null);
  const [Theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = Theme;
    firstHeader.className = "header-light";
  }, [Theme]);
  const handlerThemeChange = (e) => {
    setTheme(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="header-div" ref={firstHeader}>
      <select name="selectTheme" id="selectTheme" onChange={handlerThemeChange}>
        <option value="theme" selected disabled>
          Theme
        </option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};
export default Header;
