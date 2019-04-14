import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./RoundButton.css";

const RoundButton = ({
  name,
  color = "black",
  small,
  ghost,
  link,
  onClick,
  onFocus,
  onBlur,
  title,
  children
}) => {
  const classes = classNames("RoundButton", {
    "RoundButton--sizeSmall": small,
    "RoundButton--styleGhost": ghost,
    "RoundButton--colorBlue": color === "blue",
    "RoundButton--colorGreen": color === "green",
    "RoundButton--colorRed": color === "red",
    "RoundButton--colorMagenta": color === "magenta",
    "RoundButton--colorBlack": color === "black",
    "RoundButton--colorWhite": color === "white"
  });

  const inner = <div className="RoundButton-child">{children}</div>;

  return link ? (
    <Link
      to={link}
      name={name}
      className={classes}
      onFocus={onFocus}
      onBlur={onBlur}
      title={title}
      aria-label={title}
    >
      {inner}
    </Link>
  ) : (
    <button
      className={classes}
      name={name}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      title={title}
      aria-label={title}
    >
      {inner}
    </button>
  );
};

export default RoundButton;
