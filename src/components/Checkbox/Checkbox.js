import React from "react";
import classNames from "classnames";
import "./Checkbox.css";

const CheckMark = () => {
  return (
    <div className="CheckMark">
      <svg
        width="30"
        height="30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="checkmark"
          d="M1 5a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5zm22.121 8.121A3 3 0 1 0 18.88 8.88L13 14.757l-1.879-1.878A3 3 0 1 0 6.88 17.12l4 4a3 3 0 0 0 4.242 0l8-8z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 2H5a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 0a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5z"
        />
      </svg>
    </div>
  );
};

const Checkbox = ({
  onWhenChange = () => {},
  label,
  checked,
  value
}) => {
  return (
    <label
      className={classNames("Checkbox", { checked: checked })}
      tabIndex="0"
    >
      <input
        type="checkbox"
        className="_visuallyHidden"
        value={value}
        onChange={onWhenChange}
        checked={!!checked}
      />
      <CheckMark />
      {label}
    </label>
  );
};

export default Checkbox;
