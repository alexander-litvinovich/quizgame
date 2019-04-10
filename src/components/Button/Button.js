import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Button.css";

const Button = ({ title, subTitle = "", link = "", onClick, color, size }) => {
  const classes = classNames("Button", {
    "Button--colorBlue": color === "blue",
    "Button--colorGreen": color === "green",
    "Button--colorRed": color === "red",
    "Button--colorMagenta": color === "magenta",
    "Button--colorBlack": color === "black",
    "Button--small": size === "small"
  });

  const inner = (
    <React.Fragment>
      <div className="Button-title">
        {title}
        {subTitle.length > 0 ? (
          <div className="Button-subTitle">{subTitle}</div>
        ) : null}
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {link.length ? (
        <Link to={link} className={classes}>
          {inner}
        </Link>
      ) : (
        <button onClick={onClick} className={classes}>
          {inner}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
