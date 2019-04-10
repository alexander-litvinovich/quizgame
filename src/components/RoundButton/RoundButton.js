import React from "react";
import classNames from "classnames";
import "./RoundButton.css";

const RoundButton = ({name, color, small, onClick, onFocus, onBlur, title, children}) => (
            <button 
                className={classNames("RoundButton", {
                    "RoundButton-small": small,
                    "RoundButton-blue": color==="blue",
                    "RoundButton-green": color==="green",
                    "RoundButton-red": color==="red",
                    "RoundButton-magenta": color==="magenta",
                    "RoundButton-black": color==="black",
                    "RoundButton-white": color==="white",
                })}
                name={name} 
                onClick={onClick}
                onFocus={onFocus}
                onBlur={onBlur}
                title={title}
                aria-label={title}
            >
                <div className="RoundButton_child">
                    {children}
                </div>
            </button>
);

export default RoundButton;