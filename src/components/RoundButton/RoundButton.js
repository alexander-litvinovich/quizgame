import React, { Component } from "react";
import classNames from "classnames";
import "./RoundButton.css";

class RoundButton extends Component{
    render(){
        let {name, color, small, onClick, onFocus, onBlur, title} = this.props;
        return (
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
                    {this.props.children}
                </div>
            </button>
        );
    }
}

export default RoundButton;