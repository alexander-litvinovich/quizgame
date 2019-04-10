import React, { Component } from "react";
import classNames from "classnames";
import "./Checkbox.css";

const Checkbox = ({onClick, onChange, label}) => {
(
            <div className="Checkbox">
                <label>
                    <input type="checkbox" className="_visuallyHidden" onChange={onChange} /> {label}
                </label>
            </div>
)};

export default RoundButton;