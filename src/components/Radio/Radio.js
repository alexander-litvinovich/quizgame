import React from "react";
import classNames from "classnames";
import "./Radio.css";

const Radio = ({ onWhenChange, options, name, value, color, size }) => {
  return (
    <div className="Radio">
      {options.map(option => (
        <label
          tabIndex="0"
          className={classNames("Radio-option", {
            checked: option.value === value,
            "Radio-option--colorBlue": color === "blue",
            "Radio-option--colorGreen": color === "green",
            "Radio-option--colorRed": color === "red",
            "Radio-option--colorMagenta": color === "magenta",
            "Radio-option--colorBlack": color === "black",
            "Radio-option--small": size === "small"
          })}
        >
          <div className="Radio-option-title">
            {/* TODO:  console.log(option.value, value)*/}
            <input
              name={name}
              type="radio"
              className="_visuallyHidden"
              onChange={onWhenChange(option.value)}
              value={option.value}
              checked={option.value === +value}
            />
            {option.title}
          </div>
        </label>
      ))}
    </div>
  );
};

export default Radio;
