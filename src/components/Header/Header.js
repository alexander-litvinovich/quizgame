import React from "react";
import classNames from "classnames";
import "./Header.css";

const Header = ({ children, leftButton, rightButton }) => {
  return (
    <div className="Header">
      <div className="Header-LeftButton">{leftButton}</div>
      <div className="Header-RightButton">{rightButton}</div>
      <div className="Header-Middle">{children}</div>
    </div>
  );
};
export default Header;
